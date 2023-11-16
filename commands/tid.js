 const fs = require("fs");
 
function leiamnash(){
 return{
  "name": "tid",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "tid": {
    "func": "tid",
    "cooldown": 10
   }
  }
 }
}

async function tid(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await alice(event.senderID);
    api.chat({body: event.threadID, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(event.threadID, event.threadID, event.messageID);
    }, event.messageID);
 } catch (err) {
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    tid,
    leiamnash
}