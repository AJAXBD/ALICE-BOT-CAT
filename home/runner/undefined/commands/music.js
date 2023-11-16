 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "music",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "music": {
    "func": "music",
    "cooldown": 20
   }
  }
 }
}

async function music(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/music_" + event.senderID + ".mp4a";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}music ⟨ search ⟩\n\nexample:\n${global.alice.prefix}music forever lewis capaldi`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}music ⟨ search ⟩\n\nexample:\n${global.alice.prefix}music forever lewis capaldi`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
  const leiamRes = (await axios.get(`${global.alice.api}/youtube?search=${leiamChat}`)).data;
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
  const leiamGet = (await axios.get(leiamRes.download, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: `${leiamRes.title}\n⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    music,
    leiamnash
}