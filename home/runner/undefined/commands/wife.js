 const fs = require("fs");
 const canvas = require(`${__dirname}/../alice/wrapper/leiamnashF.js`).makeWife;

function leiamnash(){
 return{
  "name": "wife",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "wife": {
    "func": "wife",
    "cooldown": 10
   }
  }
 }
}

async function wife(event, api, leiam, log, alice) {
try{
const leiamObj = []
const leiamFile = __dirname + "/cache/wife_" + event.senderID + ".png";
const leiamRate = Math.floor(Math.random() * 101) + "%";
const leiamGroup = (await api.getThreadInfo(event.threadID)).participantIDs;
const leiamPartner = leiamGroup[Math.floor(Math.random() * leiamGroup.length)];
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamUser = (await api.getUserInfo(event.senderID))[event.senderID].name;
const leiamName = (await api.getUserInfo(leiamPartner))[leiamPartner].name;
leiamObj.push(
  { 
    id: event.senderID, 
    tag: leiamUser 
 },
 { 
    id: leiamPartner, 
    tag: leiamName 
 }
);
await canvas({
    avatar1: `${global.alice.api}/alice/profile?user=${event.senderID}`,
    avatar2: `${global.alice.api}/alice/profile?user=${leiamPartner}`,
    file: event.senderID
 });
  api.chat({body: `congratulations ${leiamUser} you found your partner ${leiamName} with ${leiamRate} chance becoming your future wife`, mentions: leiamObj, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    wife,
    leiamnash
}