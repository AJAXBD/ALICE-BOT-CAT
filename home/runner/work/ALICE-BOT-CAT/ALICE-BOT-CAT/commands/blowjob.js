 const fs = require("fs");
 const axios = require("axios");
 const leiamData = require("/home/runner/" + process.env.REPL_SLUG + "/alice/system/leiamnashC.json");

function leiamnash(){
 return{
  "name": "blowjob",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "blowjob": {
    "func": "blowjob",
    "cooldown": 10
   }
  }
 }
}

async function blowjob(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/blowjob_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
   if (!leiamData.includes(event.senderID)) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
await alice(event.senderID);
api.chat({body: "sorry but this command is only available for premium users only and you don't have an premium access to use this", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but this command is only available for premium users only and you don't have an premium access to use this", event.threadID, event.messageID);
    }, event.messageID);
} else {
   api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamGet = (await axios.get(`${global.alice.api}/anime?endpoint=blowjob`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: ``, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    blowjob,
    leiamnash
}