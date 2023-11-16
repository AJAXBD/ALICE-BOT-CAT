 const fs = require("fs");
 const axios = require("axios");
 const path = require("path");
 
function leiamnash(){
 return{
  "name": "anicry",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "anicry": {
    "func": "anicry",
    "cooldown": 10
   }
  }
 }
}

async function anicry(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/anicry_" + event.senderID + ".png";
   api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamGet = (await axios.get(`${global.alice.api}/anime?endpoint=cry`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: ``, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    anicry,
    leiamnash
}