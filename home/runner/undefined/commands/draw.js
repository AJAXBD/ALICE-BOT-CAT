 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "draw",
  "author": "leiamnash",
  "version": "1.0.1",
  "commandMap": {
  "draw": {
    "func": "draw",
    "cooldown": 40
   }
  }
 }
}

async function draw(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/draw_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
 const leiamChat = leiam.join(" ");
  if (!leiamChat) {
   await alice(event.senderID);
    api.chat({body: `please describe what you want to draw\n\nhow to use?\n${global.alice.prefix}draw ⟨ keyword ⟩\n\nexample:\n${global.alice.prefix}draw an anime girl with a blue eyes and have an yellow hair`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please describe what you want to draw\n\nhow to use?\n${global.alice.prefix}draw ⟨ keyword ⟩\n\nexample:\n${global.alice.prefix}draw an anime girl with a blue eyes and have an yellow hair`, event.threadID, event.messageID);
    }, event.messageID);
         return;
}
  api.chat(`✏️𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗶𝗺𝗮𝗴𝗲\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
  const leiamSave = (await axios.get(`${global.alice.api}/draw?keyword=${leiamChat}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
  api.chat({body: `${leiamChat}\n`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    draw,
    leiamnash
  }