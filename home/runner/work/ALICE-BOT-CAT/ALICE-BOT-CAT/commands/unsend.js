 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "unsend",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "unsend": {
    "func": "unsend",
    "cooldown": 0
   }
  }
 }
}

async function unsend(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
if (event.type != "message_reply" || event.messageReply.senderID != api.getCurrentUserID()) {
  await alice(event.senderID);
    api.chat({body: `cannot unsend other messages that not from on my system\n\nthis command is only works to me as a bot you can unsend my messages by replying to my response`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`cannot unsend other messages that not from on my system\n\nthis command is only works to me as a bot you can unsend my messages by replying to my response`, event.threadID, event.messageID);
    }, event.messageID);
} else {
api.unsendMessage(event.messageReply.messageID);
  }
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    unsend,
    leiamnash
}