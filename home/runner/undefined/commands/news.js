 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "news",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "news": {
    "func": "news",
    "cooldown": 10
   }
  }
 }
}

async function news(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/news_" + event.senderID + ".png";
const leiamGet = (await axios.get(`${global.alice.api}/news`)).data;
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamSave = (await axios.get(`${global.alice.api}/webshot?url=${leiamGet.link}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamSave, 'utf-8'));
api.chat({body: `${leiamGet.news}\n\n${leiamGet.date}`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`${leiamGet.news}\n\n${leiamGet.date}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    news,
    leiamnash
}