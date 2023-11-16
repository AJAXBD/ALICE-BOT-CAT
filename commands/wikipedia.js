 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "wikipedia",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "wikipedia": {
    "func": "wikipedia",
    "cooldown": 10
   }
  }
 }
}

async function wikipedia(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/wikipedia_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}wikipedia ⟨ search ⟩\n\nexample:\n${global.alice.prefix}wikipedia earth`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}wikipedia ⟨ search ⟩\n\nexample:\n${global.alice.prefix}wikipedia earth`, event.threadID, event.messageID);
    }, event.messageID);
         return;
  }
const leiamGet = (await axios.get(`${global.alice.api}/wikipedia?search=${leiamChat}`)).data;
   api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
const leiamSave = (await axios.get(`${global.alice.api}/webshot?url=${leiamGet.url}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
  api.chat({body: `${leiamGet.description}\n\nsource:\n${leiamGet.url}`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`${leiamGet.description}\n\nsource:\n${leiamGet.url}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    wikipedia,
    leiamnash
}