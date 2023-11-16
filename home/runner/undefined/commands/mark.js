 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "mark",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "mark": {
    "func": "mark",
    "cooldown": 5
   }
  }
 }
}

async function mark(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/mark_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `context cannot be left blank\n\nhow to use?\n${global.alice.prefix}mark ⟨ context ⟩\n\nexample:\n${global.alice.prefix}mark you can do whatever you want`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`context cannot be left blank\n\nhow to use?\n${global.alice.prefix}mark ⟨ context ⟩\n\nexample:\n${global.alice.prefix}mark you can do whatever you want`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
   api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamGet = (await axios.get(`${global.alice.api}/mark?text=${leiamChat}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: `${leiamChat}`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
  mark,
  leiamnash
}