 const fs = require("fs");
 const leiamData = require(__dirname + "/../alice/system/leiamnashO.json");
 
function leiamnash(){
 return{
  "name": "groups",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "groups": {
    "func": "groups",
    "cooldown": 10
   }
  }
 }
}

async function groups(event, api, leiam, log, alice) {
try{
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamObj = []
for (var leiamLoop = 0; leiamLoop <= leiamData.length - 1; leiamLoop++) {
 const leiamGroup = (await api.getThreadInfo(leiamData[leiamLoop]))
  leiamObj.push(`GROUP: ${leiamGroup.name}\nTID: ${leiamGroup.threadID}\n\n`);
}
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  await alice(event.senderID);
    api.chat({body: leiamObj.join(""), attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(leiamObj.join(""), event.threadID, event.messageID);
    }, event.messageID);
 } catch (err) {
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    groups,
    leiamnash
}