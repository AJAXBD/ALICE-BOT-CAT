 const fs = require("fs");

function leiamnash(){
 return{
  "name": "leave",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "leave": {
    "func": "leave",
    "cooldown": 0
   }
  }
 }
}

async function leave(event, api, leiam, log, alice) {
try{
  const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
if (global.alice.admin != event.senderID) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
  await alice(event.senderID);
  api.chat({body: "sorry but you don't have an access to use this command", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but you don't have an access to use this command", event.threadID, event.messageID);
    }, event.messageID);
} else {
const leiamChat = leiam.join(" ");
  if (!leiamChat) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
  const leiamGroup = (await api.getThreadInfo(leiamChat)).threadName;
 api.setMessageReaction("✅", event.messageID, (err) => {}, true);
api.removeUserFromGroup(api.getCurrentUserID(), leiamChat, (err) => {
  api.chat(`leave successfully\n\n${leiamGroup}\n${leiamChat}`, event.threadID, event.messageID);
  if (err) return api.chat(`leave failed\n\nseems alice system cannot leave on this group chat please try again or get a new threadID\n\n${leiamGroup}\n${leiamChat}`, event.threadID, event.messageID);
  });
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    leave,
    leiamnash
}