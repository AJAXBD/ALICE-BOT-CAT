 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "anicouple",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "anicouple": {
    "func": "anicouple",
    "cooldown": 10
   }
  }
 }
}

async function anicouple(event, api, leiam, log) {
try{
  const leiamFile1 = __dirname + "/cache/anicouple1_" + event.senderID + ".png";
  const leiamFile2 = __dirname + "/cache/anicouple2_" + event.senderID + ".png";
  const leiam = (await axios.get(`${global.alice.api}/anicouple`)).data;
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  const leiamGet1 = (await axios.get(leiam.avatar[0], { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile1, Buffer.from(leiamGet1, 'utf-8'));
  const leiamGet2 = (await axios.get(leiam.avatar[1], { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile2, Buffer.from(leiamGet2, 'utf-8'));
  api.chat({body: `${leiam.character}\n\n${leiam.anime}`, attachment: [
  fs.createReadStream(leiamFile1),
  fs.createReadStream(leiamFile2)
  ]}, event.threadID, (err) => {
  fs.unlinkSync(leiamFile1);
  fs.unlinkSync(leiamFile2);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    anicouple,
    leiamnash
}