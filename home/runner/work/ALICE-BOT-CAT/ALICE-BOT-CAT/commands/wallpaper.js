 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "wallpaper",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "wallpaper": {
    "func": "wallpaper",
    "cooldown": 5
   }
  }
 }
}

async function wallpaper(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamFile = `${__dirname}/cache/wallpaper_${event.senderID}.png`;
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}wallpaper ⟨ search ⟩\n\nexample:\n${global.alice.prefix}wallpaper alice sao`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}wallpaper ⟨ search ⟩\n\nexample:\n${global.alice.prefix}wallpaper alice sao`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
  const leiamCheck = (await axios.get(`${global.alice.api}/wallpaper?search=${leiamChat}`)).data.result;
 const leiamObj = Math.floor(Math.random() * leiamCheck.length);
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
  const leiamGet = (await axios.get(leiamCheck[leiamObj], { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: `𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 𝗿𝗲𝘀𝘂𝗹𝘁 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
  fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    wallpaper,
    leiamnash
}