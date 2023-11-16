 const fs = require("fs");
 const leiamData = require(__dirname + "/../alice/system/leiamnashO.json");

function leiamnash(){
 return{
  "name": "sendnote",
  "author": "leiamnash",
  "version": "1.0.1",
  "commandMap": {
  "sendnote": {
    "func": "sendnote",
    "cooldown": 0
   }
  }
 }
}

async function sendnote(event, api, leiam, log, alice) {
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
} else if (!leiamChat) {
  await alice(event.senderID);
  api.chat({body: `please add some context\n\nhow to use?\n${global.alice.prefix}sendnote ⟨ context ⟩\n\nexample:\n${global.alice.prefix}sendnote hello everyone`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`please add some context\n\nhow to use?\n${global.alice.prefix}sendnote ⟨ context ⟩\n\nexample:\n${global.alice.prefix}sendnote hello everyone`, event.threadID, event.messageID);
    }, event.messageID);
} else {
 var leiamErr = [];
 var leiamOk = 1;
 const leiamName = (await api.getUserInfo(global.alice.admin))[global.alice.admin].name;
await alice(event.senderID);
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
for (var leiamLoop = 0; leiamLoop <= leiamData.length - 1; leiamLoop++) {
  const leiamGc = leiamData[leiamLoop];
 if (isNaN(parseInt(leiamGc)) || leiamGc == event.threadID) "";
  api.chat({body: `📣 𝗮𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁\n\n\n${leiamChat}\n\n\n\n~ ${leiamName}`, mentions:[{tag: leiamName, id: global.alice.admin}], attachment: fs.createReadStream(aliceFile)}, leiamGc, (err) => {
  fs.unlinkSync(aliceFile);
  if (err) leiamErr.push(leiamGc);
});
  leiamOk++
await new Promise(resolve => setTimeout(resolve, 500));
}
return api.chat(`sent message to ${leiamOk} groups`, event.threadID, () => (leiamErr.length > 0 ) ? api.chat(`can't send message to ${leiamErr.length} groups`, event.threadID, event.messageID) : "", event.messageID);
  }
 } catch (err) {
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    sendnote,
    leiamnash
}