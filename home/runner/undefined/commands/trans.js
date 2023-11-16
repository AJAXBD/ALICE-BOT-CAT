 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "trans",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "trans": {
    "func": "trans",
    "cooldown": 0
   }
  }
 }
}

async function trans(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
  const leiamRes = (await axios.get(`${global.alice.api}/translate?word=${event.messageReply.body}`)).data;
api.chat(`${leiamRes.translate}\n\ntranslated from ${leiamRes.language} to en`, event.threadID, event.messageID);
} else if (!leiamChat) {
  await alice(event.senderID);
  api.chat({body: `missing word to translate\n\nhow to use?\n${global.alice.prefix}trans ⟨ word ⟩\n\nexample:\n${global.alice.prefix}trans プロジェクトアリス`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`missing word to translate\n\nhow to use?\n${global.alice.prefix}trans ⟨ word ⟩\n\nexample:\n${global.alice.prefix}trans プロジェクトアリス`, event.threadID, event.messageID);
    }, event.messageID);
} else {
  const leiamRes = (await axios.get(`${global.alice.api}/translate?word=${leiamChat}`)).data;
api.chat(`${leiamRes.translate}\n\ntranslated from ${leiamRes.language} to en`, event.threadID, event.messageID);
  }
 } catch (err) {
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    trans,
    leiamnash
}