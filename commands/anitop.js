 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "anitop",
  "author": "leiamnash",
  "version": "1.0.2",
  "commandMap": {
  "anitop": {
    "func": "anitop",
    "cooldown": 30
   }
  }
 }
}

async function anitop(event, api, leiam, log, alice) {
try{
const leiamRes = await axios.get(`${global.alice.api}/leiam/popular`);
const leiamGoing = leiamRes.data.result;
const leiamAniSub = leiamRes.data.anisub;
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
     const leiamImage = []
     const leiamData = []
for (var leiamLoop = 0; leiamLoop <= leiamGoing.length - 1; leiamLoop++) {
 leiamData.push(`------------------------------------------\ntitle: ${leiamGoing[leiamLoop].animeTitle}\nrelease date: ${leiamGoing[leiamLoop].releasedDate}\n\n`);
    const leiamFile = `${__dirname}/cache/anitop${leiamLoop}_${event.senderID}.png`;
    const leiamGet = (await axios.get(leiamGoing[leiamLoop].animeImg, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
leiamImage.push(fs.createReadStream(leiamFile).on("end", () => {
    fs.unlinkSync(leiamFile);
 }));
}
  api.chat({body: `𝘁𝗼𝗽 𝗮𝗻𝗶𝘀𝗲𝗿𝗶𝗲𝘀 𝘁𝗵𝗶𝘀 𝘀𝗲𝗮𝘀𝗼𝗻\n\n${leiamData.join("")}`, attachment: leiamImage}, event.threadID, (err) => {
    if (err) return api.chat(`𝘁𝗼𝗽 𝗮𝗻𝗶𝘀𝗲𝗿𝗶𝗲𝘀 𝘁𝗵𝗶𝘀 𝘀𝗲𝗮𝘀𝗼𝗻\n\n${leiamData.join("")}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    anitop,
    leiamnash
}