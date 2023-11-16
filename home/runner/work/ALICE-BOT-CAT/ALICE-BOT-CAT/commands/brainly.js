 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "brainly",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "brainly": {
    "func": "brainly",
    "cooldown": 10
   }
  }
 }
}

async function brainly(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}brainly ⟨ search ⟩\n\nexample:\n${global.alice.prefix}brainly what is javascript`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}brainly ⟨ search ⟩\n\nexample:\n${global.alice.prefix}brainly what is javascript`, event.threadID, event.messageID);
    }, event.messageID);
         return;
}
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
  const leiamRes = (await axios.get(`${global.alice.api}/brainly?question=${leiamChat}`)).data;
api.chat(`question:\n${leiamRes.question}\n\nanswer:\n${leiamRes.answer}`, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    brainly,
    leiamnash
}