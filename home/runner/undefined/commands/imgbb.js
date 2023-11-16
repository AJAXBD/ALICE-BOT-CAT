 const turl = require("turl");
 const axios = require("axios");
 const fs = require("fs");

function leiamnash(){
 return{
  "name": "imgbb",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "imgbb": {
    "func": "imgbb",
    "cooldown": 0 
   }
  }
 }
}

async function imgbb(event, api, leiam, log, alice) {
try{
 const file = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
 const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
   const leiamUrl = await turl.shorten(event.messageReply.attachments[0].url);
 const leiamImage = (await axios.get(`${global.alice.api}/imgbb?url=${leiamUrl}`)).data.image;
  api.chat(leiamImage, event.threadID, event.messageID);
 } else if (!leiamChat) {
    await alice(event.senderID);
    api.chat({body: `attachment not found\n\nhow to use?\n${global.alice.prefix}imgbb ⟨ image reply ⟩`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`attachment not found\n\nhow to use?\n${global.alice.prefix}imgbb ⟨ image reply ⟩`, event.threadID, event.messageID);
    }, event.messageID);
  } else if (leiamChat.startsWith("https://")) {
 const leiamUrl = await turl.shorten(leiamChat);
 const leiamImage = (await axios.get(`${global.alice.api}/imgbb?url=${leiamUrl}`)).data.image;
  api.chat(leiamImage, event.threadID, event.messageID);
 } else {
  await alice(event.senderID);
    api.chat({body: `please provide a picture url\n\nhow to use?\n${global.alice.prefix}imgbb ⟨ url ⟩\n\nexample:\n${global.alice.prefix}imgbb https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`please provide a picture url\n\nhow to use?\n${global.alice.prefix}imgbb ⟨ url ⟩\n\nexample:\n${global.alice.prefix}imgbb https://i.pinimg.com/originals/9f/95/67/9f9567a5e25eafaf779f9cefceac3c76.jpg`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) {
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    imgbb,
    leiamnash
}