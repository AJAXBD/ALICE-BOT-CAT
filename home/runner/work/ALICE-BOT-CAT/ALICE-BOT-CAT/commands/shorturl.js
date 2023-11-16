 const turl = require("turl");
 const fs = require("fs");

function leiamnash(){
 return{
  "name": "shorturl",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "shorturl": {
    "func": "shorturl",
    "cooldown": 0 
   }
  }
 }
}

async function shorturl(event, api, leiam, log, alice) {
try{
 const file = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
 const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   const leiamUrl = await turl.shorten(event.messageReply.attachments[0].url);
  api.chat(leiamUrl, event.threadID, event.messageID);
 } else if (!leiamChat) {
   await alice(event.senderID);
    api.chat({body: `missing url\n\nhow to use?\n${global.alice.prefix}shorturl ⟨ url ⟩\n\nexample:\n${global.alice.prefix}shorturl https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`missing url\n\nhow to use?\n${global.alice.prefix}shorturl ⟨ url ⟩\n\nexample:\n${global.alice.prefix}shorturl https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, event.threadID, event.messageID);
    }, event.messageID);
  } else if (leiamChat.startsWith("https://")) {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
 const leiamUrl = await turl.shorten(leiamChat);
  api.chat(leiamUrl, event.threadID, event.messageID);
   } else {
     await alice(event.senderID);
    api.chat({body: `that's not a url please provide a valid link url\n\nhow to use?\n${global.alice.prefix}shorturl ⟨ url ⟩\n\nexample:\n${global.alice.prefix}shorturl https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`that's not a url please provide a valid link url\n\nhow to use?\n${global.alice.prefix}shorturl ⟨ url ⟩\n\nexample:\n${global.alice.prefix}shorturl https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    shorturl,
    leiamnash
}