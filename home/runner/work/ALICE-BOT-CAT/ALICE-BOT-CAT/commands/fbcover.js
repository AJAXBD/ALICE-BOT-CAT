 const fs = require("fs");
 const canvas = require(`${__dirname}/../alice/wrapper/leiamnashC.js`).makeFbcover;

function leiamnash(){
 return{
  "name": "fbcover",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "fbcover": {
    "func": "fbcover",
    "cooldown": 10
   }
  }
 }
}

async function fbcover(event, api, leiam, log) {
try{
 const alice = leiam.join(" ");
 const leiamnash = Object.keys(event.mentions);
 const file = __dirname + "/cache/fbcover_" + event.senderID + ".png";
if(event.type == "message_reply") {
 const leiamName = (await api.getUserInfo(event.messageReply.senderID))[event.messageReply.senderID]
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  if (leiamName.gender == 2) leiamName.gender = "male";
  if (leiamName.gender == 1) leiamName.gender = "female";
  if (leiamName.vanity == "") leiamName.vanity = "AliceProject@LeiamNash";
  await canvas({
    avatar: `${global.alice.api}/alice/profile?user=${event.messageReply.senderID}`,
    file: event.senderID,  
    fullName: leiamName.name,
    firstName: leiamName.firstName,
    uid: event.messageReply.senderID,
    link: leiamName.vanity,
    gender: leiamName.gender
  });
  api.chat({body: `Name: ${leiamName.name}\nUid: ${event.messageReply.senderID}\nGender: ${leiamName.gender}\n\n${leiamName.profileUrl}`, mentions: [{ tag: leiamName.name, id: event.messageReply.senderID }], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
    }, event.messageID);
} else if (!alice[0]) {
   const leiamName = (await api.getUserInfo(event.senderID))[event.senderID]
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  if (leiamName.gender == 2) leiamName.gender = "male";
  if (leiamName.gender == 1) leiamName.gender = "female";
  if (leiamName.vanity == "") leiamName.vanity = "AliceProject@LeiamNash";
  await canvas({
    avatar: `${global.alice.api}/alice/profile?user=${event.senderID}`,
    file: event.senderID,  
    fullName: leiamName.name,
    firstName: leiamName.firstName,
    uid: event.senderID,
    link: leiamName.vanity,
    gender: leiamName.gender
  });
  api.chat({body: `Name: ${leiamName.name}\nUid: ${event.senderID}\nGender: ${leiamName.gender}\n\n${leiamName.profileUrl}`, mentions: [{ tag: leiamName.name, id: event.senderID }], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
} else if (leiamnash) {
  const leiamName = (await api.getUserInfo(leiamnash))[leiamnash]
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  if (leiamName.gender == 2) leiamName.gender = "male";
  if (leiamName.gender == 1) leiamName.gender = "female";
  if (leiamName.vanity == "") leiamName.vanity = "AliceProject@LeiamNash";
  await canvas({
    avatar: `${global.alice.api}/alice/profile?user=${leiamnash}`,
    file: event.senderID,  
    fullName: leiamName.name,
    firstName: leiamName.firstName,
    uid: leiamnash,
    link: leiamName.vanity,
    gender: leiamName.gender
  });
  api.chat({body: `Name: ${leiamName.name}\nUid: ${leiamnash}\nGender: ${leiamName.gender}\n\n${leiamName.profileUrl}`, mentions: [{ tag: leiamName.name, id: leiamnash[0] }], attachment: fs.createReadStream(file)}, event.threadID, (err) => {
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
    fbcover,
    leiamnash
}