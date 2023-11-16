 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "dictionary",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "dictionary": {
    "func": "dictionary",
    "cooldown": 0
   }
  }
 }
}

async function dictionary(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}dictionary ⟨ search ⟩\n\nexample:\n${global.alice.prefix}dictionary aesthetic`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}dictionary ⟨ search ⟩\n\nexample:\n${global.alice.prefix}dictionary aesthetic`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
const leiamA = (await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${leiamChat}`)).data[0];
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      let example = leiamA.meanings[0].definitions.example;
      let phonetics = leiamA.phonetics;
      let meanings = leiamA.meanings
      msg_meanings = "";
      meanings.forEach(items => {
        example = items.definitions[0].example?`\n*example:\n \"${items.definitions[0].example[0].toUpperCase() + items.definitions[0].example.slice(1)}\"`:'';
        msg_meanings += `\n• ${items.partOfSpeech}\n ${items.definitions[0].definition[0].toUpperCase() + items.definitions[0].definition.slice(1) + example}`
      });
      msg_phonetics = '';
      phonetics.forEach(items => {
        text = items.text?`\n    /${items.text}/`:'';
        msg_phonetics += text;
      })
      var msg = `❰ ❝ ${leiamA.word} ❞ ❱` + msg_phonetics + msg_meanings;
      return api.chat(msg, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    dictionary,
    leiamnash
}