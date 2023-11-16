 const axios = require("axios");

function leiamnash(){
 return{
  "name": "fact",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "fact": {
    "func": "fact",
    "cooldown": 0
   }
  }
 }
}

async function fact(event, api, leiam, log) {
try{
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
 const leiamRes = (await axios.get(`${global.alice.api}/fact`)).data.fact;
api.chat(`did you know\n\n${leiamRes}`, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    fact,
    leiamnash
}