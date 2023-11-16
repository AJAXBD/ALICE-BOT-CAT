 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "say",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "say": {
    "func": "say",
    "cooldown": 10
   }
  }
 }
}

async function say(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamFile = __dirname + "/cache/say_" + event.senderID + ".mp3";
const leiamChat = leiam.join(" ");
  
if(event.type == "message_reply") {
  const leiamGet = (await axios.get(`${global.alice.api}/say?word=${event.messageReply.body}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: event.messageReply.body, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
} else if (!leiamChat) {
  await alice(event.senderID);
  api.chat({body: `missing word to comvert\n\nhow to use?\n${global.alice.prefix}say ⟨ word ⟩\n\nexample:\n${global.alice.prefix}say why im still alive`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
    if (err) return api.chat(`missing word to convert\n\nhow to use?\n${global.alice.prefix}say ⟨ word ⟩\n\nexample:\n${global.alice.prefix}say why im still alive`, event.threadID, event.messageID);
    }, event.messageID);
} else {
    const leiamGet = (await axios.get(`${global.alice.api}/say?word=${leiamChat}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
  api.chat({body: leiamChat, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    say,
    leiamnash
}