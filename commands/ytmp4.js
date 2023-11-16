 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "ytmp4",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "ytmp4": {
    "func": "ytmp4",
    "cooldown": 10
   }
  }
 }
}

async function ytmp4(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/ytmp4_" + event.senderID + ".mp4";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `missing youtube link\n\nhow to use?\n${global.alice.prefix}ytmp4 ⟨ link ⟩\n\nexample:\n${global.alice.prefix}ytmp4 https://youtu.be/q9wVS_rWPLw`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`missing tiktok link\n\nhow to use?\n${global.alice.prefix}ytmp4 ⟨ link ⟩\n\nexample:\n${global.alice.prefix}ytmp4 https://youtu.be/q9wVS_rWPLw`, event.threadID, event.messageID);
    }, event.messageID);
  } else if (leiamChat.startsWith("https://youtu.be/") || leiamChat.startsWith("https://www.youtube.com/watch") || leiamChat.startsWith("https://youtube.com/shorts") || leiamChat.startsWith("https://youtube.com/watch")) {
const leiamGet = (await axios.get(`${global.alice.api}/ytdl?url=${leiamChat}`)).data.download;
    api.chat(`♻️𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
const leiamSave = (await axios.get(leiamGet, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
 api.chat({body: `𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
} else {
    await alice(event.senderID);
    api.chat({body: `please provide a valid youtube video link\n\nlinks supported\n• youtube web\n• youtube .be\n• youtube shorts\n• youtube user upload\n\nexample:\n${global.alice.prefix}ytmp4 https://youtu.be/q9wVS_rWPLw`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please provide a valid youtube video link\n\nlinks supported\n• youtube web\n• youtube .be\n• youtube shorts\n• youtube user upload\n\nexample:\n${global.alice.prefix}ytmp4 https://youtu.be/q9wVS_rWPLw`, event.threadID, event.messageID);
    }, event.messageID);
  } 
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    ytmp4,
    leiamnash
}