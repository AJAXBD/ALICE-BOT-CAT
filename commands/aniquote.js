 const axios = require("axios");

function leiamnash(){
 return{
  "name": "aniquote",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "aniquote": {
    "func": "aniquote",
    "cooldown": 0
   }
  }
 }
}

async function aniquote(event, api, leiam, log) {
try{
 const leiamRes = (await axios.get(`${global.alice.api}/aniquote`)).data;
api.chat(`${leiamRes.quote}\n\n~ ${leiamRes.character}\n⟨ ${leiamRes.anime} ⟩`, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    aniquote,
    leiamnash
}