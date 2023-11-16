 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "fbmp3",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "fbmp3": {
    "func": "fbmp3",
    "cooldown": 10
   }
  }
 }
}

async function fbmp3(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/fbmp3_" + event.senderID + ".mp3";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `missing facebook link\n\nhow to use?\n${global.alice.prefix}fbmp3 ⟨ link ⟩\n\nexample:\n${global.alice.prefix}fbmp3 https://fb.watch/kmJGnZOGE0`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`missing facebook link\n\nhow to use?\n${global.alice.prefix}fbmp3 ⟨ link ⟩\n\nexample:\n${global.alice.prefix}fbmp3 https://fb.watch/kmJGnZOGE0`, event.threadID, event.messageID);
    }, event.messageID);
  } else if (leiamChat.startsWith("https://fb.") || leiamChat.startsWith("https://www.facebook")) {
const leiamGet = (await axios.get(`${global.alice.api}/facebook?download=${leiamChat}`)).data.SD;
    api.chat(`♻️𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
const leiamSave = (await axios.get(leiamGet, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
 api.chat({body: `𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
} else {
    await alice(event.senderID);
    api.chat({body: `please provide a valid facebook video link\n\nlinks supported\n• fb reels\n• fb group video\n• fb page video\n• fb user upload\n• fb watch\n\nexample:\n${global.alice.prefix}fbmp3 https://fb.watch/kmJGnZOGE0`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please provide a valid video facebook link\n\nlinks supported\n• fb reels\n• fb group video\n• fb page video\n• fb user upload\n• fb watch\n\nexample:\n${global.alice.prefix}fbmp3 https://fb.watch/kmJGnZOGE0`, event.threadID, event.messageID);
    }, event.messageID);
  } 
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    fbmp3,
    leiamnash
}