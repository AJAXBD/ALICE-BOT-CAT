 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "tod",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "tod": {
    "func": "tod",
    "cooldown": 10
   }
  }
 }
}

async function tod(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ").toLowerCase();
  if (!leiamChat) {
    const leiamName = (await api.getUserInfo(event.senderID))[event.senderID].name;
  await alice(event.senderID);
    api.chat({body: `hello ${leiamName} i have a question for you\n\n⟨ truth or dare? ⟩\n\nhow to use?\n${global.alice.prefix}tod ⟨ type ⟩\n\nexample:\n${global.alice.prefix}tod truth`, attachment: fs.createReadStream(aliceFile), mentions: [{ tag: leiamName, id: event.senderID }]}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`hello ${leiamName} i have a question for you\n\n⟨ truth or dare? ⟩\n\nhow to use?\n${global.alice.prefix}tod ⟨ type ⟩\n\nexample:\n${global.alice.prefix}tod truth`, event.threadID, event.messageID);
    }, event.messageID);
         return;
  }
     switch (leiamChat) {
       case "truth":
     api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   const leiamTru = (await axios.get(`${global.alice.api}/tod?type=truth`)).data.question;
  api.chat(leiamTru, event.threadID, event.messageID);
          break;
       case "dare":
     api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   const leiamDare = (await axios.get(`${global.alice.api}/tod?type=dare`)).data.question;
  api.chat(leiamDare, event.threadID, event.messageID);
          break;
         default:
await alice(event.senderID);
    api.chat({body: `invalid type\n\nhow to use?\n${global.alice.prefix}tod ⟨ types ⟩\n\ntypes available:\ntruth, dare`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`invalid type\n\nhow to use?\n${global.alice.prefix}tod ⟨ types ⟩\n\ntypes available:\ntruth, dare`, event.threadID, event.messageID);
    }, event.messageID);
         break;
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    tod,
    leiamnash
}