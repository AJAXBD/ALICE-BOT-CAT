 const fs = require("fs");
 
function leiamnash(){
 return{
  "name": "uid",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "uid": {
    "func": "uid",
    "cooldown": 10
   }
  }
 }
}

async function uid(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamnash = Object.keys(event.mentions);
const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await alice(event.senderID);
    api.chat({body: event.messageReply.senderID, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(event.messageReply.senderID, event.threadID, event.messageID);
    }, event.messageID);
         
} else if (!leiamChat) {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await alice(event.senderID);
  api.chat({body: event.senderID, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(event.senderID, event.threadID, event.messageID);
    }, event.messageID);
} else if (leiamnash) {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await alice(event.senderID);
  api.chat({body: leiamnash[0], attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(leiamnash[0], event.threadID, event.messageID);
    }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    uid,
    leiamnash
}