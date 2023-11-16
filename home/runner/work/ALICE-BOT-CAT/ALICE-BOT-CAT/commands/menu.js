 const fs = require("fs");
 const leiamData = require("/home/runner/" + process.env.REPL_SLUG + "/alice/system/leiamnashC.json");

function leiamnash(){
 return{
  "name": "menu",
  "author": "leiamnash",
  "version": "1.0.4",
  "commandMap": {
  "menu": {
    "func": "menu",
    "cooldown": 0
   }
  }
 }
}

async function menu(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/hentai_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
  if (!leiamData.includes(event.senderID)) {
  api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
await alice(event.senderID);
api.chat({body: "sorry but this command is only available for premium users only and you don't have an premium access to use this", attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat("sorry but this command is only available for premium users only and you don't have an premium access to use this", event.threadID, event.messageID);
    }, event.messageID);
} else {
await alice(event.senderID);
api.chat({body: `premium commands:\n\n${global.alice.prefix}gangbang\n${global.alice.prefix}hentai\n${global.alice.prefix}hanime\n${global.alice.prefix}blowjob\n${global.alice.prefix}milf\n${global.alice.prefix}trap\n${global.alice.prefix}oppai\n${global.alice.prefix}suck\n${global.alice.prefix}fuck\n${global.alice.prefix}finger\n${global.alice.prefix}creampie\n${global.alice.prefix}cum\n${global.alice.prefix}segs\n${global.alice.prefix}pornhub\n${global.alice.prefix}pornsearch\n${global.alice.prefix}porn\n${global.alice.prefix}anihub\n${global.alice.prefix}redroom`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`premium commands:\n\n${global.alice.prefix}gangbang\n${global.alice.prefix}hentai\n${global.alice.prefix}hanime\n${global.alice.prefix}blowjob\n${global.alice.prefix}milf\n${global.alice.prefix}trap\n${global.alice.prefix}oppai\n${global.alice.prefix}suck\n${global.alice.prefix}fuck\n${global.alice.prefix}finger\n${global.alice.prefix}creampie\n${global.alice.prefix}cum\n${global.alice.prefix}segs\n${global.alice.prefix}pornhub\n${global.alice.prefix}pornsearch\n${global.alice.prefix}porn\n${global.alice.prefix}anihub\n${global.alice.prefix}redroom`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    menu,
    leiamnash
}