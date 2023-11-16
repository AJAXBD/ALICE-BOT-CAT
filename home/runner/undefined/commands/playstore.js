 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "playstore",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "playstore": {
    "func": "playstore",
    "cooldown": 10
   }
  }
 }
}

async function playstore(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/playstore_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}playstore ⟨ search ⟩\n\nexample:\n${global.alice.prefix}playstore replit`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}playstore ⟨ search ⟩\n\nexample:\n${global.alice.prefix}playstore replit`, event.threadID, event.messageID);
    }, event.messageID);
         return;
  }
const leiamGet = (await axios.get(`${global.alice.api}/playstore?search=${leiamChat}`)).data;
api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
const leiamSave = (await axios.get(`${leiamGet.image}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
  api.chat({body: `${leiamGet.result}`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`${leiamGet.result}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    playstore,
    leiamnash
}