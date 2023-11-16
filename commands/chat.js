 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "chat",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "chat": {
    "func": "chat",
    "cooldown": 0
   }
  }
 }
}

async function chat(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `context cannot be left blank\n\nhow to use?\n${global.alice.prefix}chat ⟨ context ⟩\n\nexample:\n${global.alice.prefix}chat hi`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`context cannot be left blank\n\nhow to use?\n${global.alice.prefix}chat ⟨ context ⟩\n\nexample:\n${global.alice.prefix}chat hi`, event.threadID, event.messageID);
    }, event.messageID);
         return;
}
  const leiamRes = (await axios.get(`${global.alice.api}/chat?ask=${leiamChat}`)).data;
  if (leiamRes.error == "please teach me") {
    await alice(event.senderID);
    api.chat({body: `sorry but i cannot understand what are you saying please use ⟨ ${global.alice.prefix}teach ⟩ to teach me some response`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`sorry but i cannot understand what are you saying please use ⟨ ${global.alice.prefix}teach ⟩ to teach me some response`, event.threadID, event.messageID);
    }, event.messageID);
} else {
  api.chat(leiamRes.answer, event.threadID, event.messageID);
  }
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    chat,
    leiamnash
}