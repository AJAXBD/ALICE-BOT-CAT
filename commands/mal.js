 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "mal",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "mal": {
    "func": "mal",
    "cooldown": 20
   }
  }
 }
}

async function mal(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamFile = __dirname + "/cache/mal_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}mal ⟨ search ⟩\n\nexample:\n${global.alice.prefix}mal sao alicization`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}mal ⟨ search ⟩\n\nexample:\n${global.alice.prefix}mal sao alicization`, event.threadID, event.messageID);
    }, event.messageID);
         return;
}
  const leiamRes = (await axios.get(`${global.alice.api}/mal?anime=${leiamChat}`)).data;
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
  const leiamGet = (await axios.get(leiamRes.image, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: leiamRes.result, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(leiamRes.result, event.threadID, event.messageID);
    }, event.messageID);
 } catch (err) {
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    mal,
    leiamnash
}