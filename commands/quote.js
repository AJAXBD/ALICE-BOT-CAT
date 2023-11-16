 const axios = require("axios");

function leiamnash(){
 return{
  "name": "quote",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "quote": {
    "func": "quote",
    "cooldown": 0
   }
  }
 }
}

async function quote(event, api, leiam, log) {
try{
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
 const leiamRes = (await axios.get(`${global.alice.api}/quote`)).data.quote;
api.chat(leiamRes, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    quote,
    leiamnash
}