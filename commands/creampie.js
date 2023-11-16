 const fs = require("fs");
 const canvas = require(`${__dirname}/../alice/wrapper/leiamnashB.js`).makeCreampie;
 const leiamData = require("/home/runner/" + process.env.REPL_SLUG + "/alice/system/leiamnashC.json");

function leiamnash(){
 return{
  "name": "creampie",
  "author": "leiamnash",
  "version": "1.0.1",
  "commandMap": {
  "creampie": {
    "func": "creampie",
    "cooldown": 10
   }
  }
 }
}

async function creampie(event, api, leiam, log, alice) {
try{
 const leiamChat = leiam.join(" ");
 const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
   if (!leiamData.includes(event.senderID)) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
await alice(event.senderID);
api.chat({body: "sorry but this command is only available for premium users only and you don't have an premium access to use this", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but this command is only available for premium users only and you don't have an premium access to use this", event.threadID, event.messageID);
    }, event.messageID);
         return;
}
 const leiamnash = Object.keys(event.mentions);
 const file = __dirname + "/cache/creampie_" + event.senderID + ".png";
 const leiamTxt = "i seen too much stop internet for now";
if(event.type == "message_reply") {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   await canvas({
    user: `${global.alice.api}/alice/profile?user=${event.messageReply.senderID}`,
    file: event.senderID
  });
 const leiamGet = (await api.getUserInfo(event.messageReply.senderID))[event.messageReply.senderID].name;
    api.chat({body: `${leiamTxt} ${leiamGet}`, mentions: [{tag: leiamGet, id: event.messageReply.senderID}], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
   fs.unlinkSync(file);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
 } else if (!leiamChat) {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   await canvas({
    user: `${global.alice.api}/alice/profile?user=${event.senderID}`,
    file: event.senderID
  });
  const leiamGet = (await api.getUserInfo(event.senderID))[event.senderID].name;
    api.chat({body: `${leiamTxt} ${leiamGet}`, mentions: [{tag: leiamGet, id: event.senderID}], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
   fs.unlinkSync(file);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
 } else if (leiamnash) {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
   await canvas({
    user: `${global.alice.api}/alice/profile?user=${leiamnash}`,
    file: event.senderID
  });
  const leiamGet = (await api.getUserInfo(leiamnash))[leiamnash].name;
    api.chat({body: `${leiamTxt} ${leiamGet}`, mentions: [{tag: leiamGet, id: leiamnash[0]}], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
   fs.unlinkSync(file);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
  creampie,
  leiamnash
}