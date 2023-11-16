const axios = require("axios");
const fs = require("fs");
 
function leiamnash(){
 return{
  "name": "stalk",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "stalk": {
    "func": "stalk",
    "cooldown": 10
   }
  }
 }
}

async function stalk(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/stalk_" + event.senderID + ".png";
const leiamnash = Object.keys(event.mentions);
if (event.type == "message_reply") {
  const leiamA = (await api.getUserInfo(event.messageReply.senderID))[event.messageReply.senderID];
  if (leiamA.gender == 1) leiamA.gender = "female";
  if (leiamA.gender == 2) leiamA.gender = "male";
  if (leiamA.vanity == "") leiamA.vanity = "null"
  const leiam = (await axios.get(`${global.alice.api}/stalk?user=${event.messageReply.senderID}`)).data;
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  const leiamGet = (await axios.get(`${global.alice.api}/alice/profile?user=${event.messageReply.senderID}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(aliceFile, Buffer.from(leiamGet, 'utf-8'));
    api.chat({body: `${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${event.messageReply.senderID}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${event.messageReply.senderID}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, event.threadID, event.messageID);
    }, event.messageID);
} else if (!leiam[0]) {
    const leiamA = (await api.getUserInfo(event.senderID))[event.senderID];
  if (leiamA.gender == 1) leiamA.gender = "female";
  if (leiamA.gender == 2) leiamA.gender = "male";
  if (leiamA.vanity == "") leiamA.vanity = "null"
    const leiam = (await axios.get(`${global.alice.api}/stalk?user=${event.senderID}`)).data;
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamGet = (await axios.get(`${global.alice.api}/alice/profile?user=${event.senderID}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(aliceFile, Buffer.from(leiamGet, 'utf-8'));
    api.chat({body: `${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${event.senderID}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${event.senderID}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, event.threadID, event.messageID);
    }, event.messageID);
} else if (leiamnash) {
    const leiamA = (await api.getUserInfo(leiamnash[0]))[leiamnash[0]];
  if (leiamA.gender == 1) leiamA.gender = "female";
  if (leiamA.gender == 2) leiamA.gender = "male";
  if (leiamA.vanity == "") leiamA.vanity = "null"
    const leiam = (await axios.get(`${global.alice.api}/stalk?user=${leiamnash[0]}`)).data;
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const leiamGet = (await axios.get(`${global.alice.api}/alice/profile?user=${leiamnash[0]}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(aliceFile, Buffer.from(leiamGet, 'utf-8'));
    api.chat({body: `${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${leiamnash[0]}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`${leiamA.name}\n\nfirstname: ${leiamA.firstName}\nvanity: ${leiamA.vanity}\nbirthday: ${leiam.birthday}\nfollowers: ${leiam.followers}\nuid: ${leiamnash[0]}\ngender: ${leiamA.gender}\naddress: ${leiam.address}\nlocation: ${leiam.location}\nrelationship: ${leiam.relationship}\npartner: ${leiam.partner}\nwebsite: ${leiam.website}\nbio: ${leiam.bio}\n${leiamA.profileUrl}`, event.threadID, event.messageID);
    }, event.messageID);
  }
 } catch (err) {
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    stalk,
    leiamnash
}