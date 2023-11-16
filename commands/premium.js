 const fs = require("fs");
 const path = require("path").join(__dirname + "/../alice/system/leiamnashC.json");
 var leiamData = require(__dirname + "/../alice/system/leiamnashC.json");

function leiamnash(){
 return{
  "name": "premium",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "premium": {
    "func": "premium",
    "cooldown": 20
   }
  }
 }
}

async function premium(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
if (global.alice.admin != event.senderID) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
await alice(event.senderID);
api.chat({body: "sorry but you don't have an access to use this command", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but you don't have an access to use this command", event.threadID, event.messageID);
    }, event.messageID);
} else if (!leiamChat || leiamChat.startsWith("@") || !leiamChat.includes("0")) {
await alice(event.senderID);
api.chat({body: `please provide a valid userID\n\nhow to use?\n${global.alice.prefix}premium ⟨ userID ⟩\n\nexample:\n${global.alice.prefix}premium ${global.alice.admin}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please provide a valid userID\n\nhow to use?\n${global.alice.prefix}premium ⟨ userID ⟩\n\nexample:\n${global.alice.prefix}premium ${global.alice.admin}`, event.threadID, event.messageID);
    }, event.messageID);
} else if (leiamData.includes(leiamChat)) {
 const leiamName = (await api.getUserInfo(leiamChat))[leiamChat].name;
 await alice(event.senderID);
 api.chat({body: `this user is already premium\n\n${leiamName}\n${leiamChat}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`this user is already premium\n\n${leiamName}\n${leiamChat}`, event.threadID, event.messageID);
    }, event.messageID);
} else {
leiamData.push(leiamChat);
fs.writeFileSync(path, JSON.stringify(leiamData, null, 2), 'utf-8');
const leiamName = (await api.getUserInfo(leiamChat))[leiamChat].name;
await alice(event.senderID);
api.chat({body: `successfully added\n\nyou can now used premium commands please type\n⟨ ${global.alice.prefix}menu ⟩ to see what premium commands can you used\n\n${leiamName}\n${leiamChat}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`successfully added\n\nyou can now used premium commands please type\n⟨ ${global.alice.prefix}menu ⟩ to see what premium commands can you used\n\n${leiamName}\n${leiamChat}`, event.threadID, event.messageID);
  }, event.messageID);
 }
} catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}
   
module.exports = {
    premium,
    leiamnash
}