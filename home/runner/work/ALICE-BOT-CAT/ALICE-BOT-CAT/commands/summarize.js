 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "summarize",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "summarize": {
    "func": "summarize",
    "cooldown": 0
   }
  }
 }
}

async function summarize(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
if(event.type == "message_reply") {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  const leiamRes = (await axios.get(`${global.alice.api}/summarize?text=${event.messageReply.body}`)).data.summary;
api.chat(leiamRes, event.threadID, event.messageID);
} else if (!leiamChat) {
  await alice(event.senderID);
  api.chat({body: `please provide a context to summarize\n\nhow to use?\n${global.alice.prefix}summarize ⟨ context ⟩\n\nexample:\n${global.alice.prefix}summarize alice was walking in the forest when she came across a large, frightening looking rabbit`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please provide a context to summarize\n\nhow to use?\n${global.alice.prefix}summarize ⟨ context ⟩\n\nexample:\n${global.alice.prefix}summarize alice was walking in the forest when she came across a large, frightening looking rabbit`, event.threadID, event.messageID);
    }, event.messageID);
} else {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  const leiamRes = (await axios.get(`${global.alice.api}/summarize?text=${leiamChat}`)).data.summary;
api.chat(leiamRes, event.threadID, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    summarize,
    leiamnash
}