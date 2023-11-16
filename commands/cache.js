 const fs = require("fs");

function leiamnash(){
 return{
  "name": "cache",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "cache": {
    "func": "cache",
    "cooldown": 0
   }
  }
 }
}

async function cache(event, api, leiam, log, alice) {
try{
  const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
  const leiamObj = []
  const leiamFile = fs.readdirSync(__dirname + "/cache").filter(leiam => leiam.includes("."));
if (global.alice.admin != event.senderID) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
  await alice(event.senderID);
  api.chat({body: "sorry but you don't have an access to use this command", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but you don't have an access to use this command", event.threadID, event.messageID);
    }, event.messageID);
} else if (leiamFile.length == 0) {
 await alice(event.senderID);
  api.chat({body: "everything is fine your cache is empty there's no stack files existing on it", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("everything is fine your cache is empty there's no stack files existing on it", event.threadID, event.messageID);
    }, event.messageID);
} else {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
for (const leiamDel of leiamFile) {
leiamObj.push(leiamDel);
    fs.unlinkSync(__dirname + "/cache/" + leiamDel);
}
 await alice(event.senderID);
  api.chat({body: `successfully delete this following file in cache:\n\n${leiamObj.replace(",", "\n")}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`successfully delete this following file in cache:\n\n${leiamObj.replace(",", "\n")}`, event.threadID, event.messageID);
    }, event.messageID);
 }
} catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    cache,
    leiamnash
}