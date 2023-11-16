 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "ytsearch",
  "author": "leiamnash",
  "version": "1.0.2",
  "commandMap": {
  "ytsearch": {
    "func": "ytsearch",
    "cooldown": 10
   }
  }
 }
}

async function ytsearch(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/video_" + event.senderID + ".mp4";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}ytsearch ⟨ search ⟩\n\nexample:\n${global.alice.prefix}ytsearch amv typography`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}ytsearch ⟨ search ⟩\n\nexample:\n${global.alice.prefix}ytsearch amv typography`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
      const leiamImage = []
      const leiamDes = []
for (var leiamLoop = 1; leiamLoop <= 6; leiamLoop++) {
    const leiamFile = `${__dirname}/cache/ytsearch${leiamLoop}_${event.senderID}.png`;
    const leiamRes = (await axios.get(`${global.alice.api}/ytsearch?search=${leiamChat}`)).data.results[leiamLoop];
leiamDes.push(`-------------------⟨ ${leiamLoop} ⟩-------------------\ntitle: ${leiamRes.title}\nchannel: ${leiamRes.channel.name}\nviews: ${leiamRes.views}\nduration: ${leiamRes.duration_raw}\nlink: ${leiamRes.shareLink}\n\n`);
    const leiamGet = (await axios.get(`https://img.youtube.com/vi/${leiamRes.id}/hqdefault.jpg`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
leiamImage.push(fs.createReadStream(leiamFile).on("end", () => {
    fs.unlinkSync(leiamFile);
 }));
}
 api.chat({body: `${leiamDes.join("")}`, attachment: leiamImage}, event.threadID, (err) => {
    if (err) return api.chat(leiamDes.join(""), event.threadID, event.messageID);
   }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    ytsearch,
    leiamnash
}