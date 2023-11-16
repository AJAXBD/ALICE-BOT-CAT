 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "waifu",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "waifu": {
    "func": "waifu",
    "cooldown": 10
   }
  }
 }
}

async function waifu(event, api, leiam, log, alice) {
try{
const leiamFile = __dirname + "/cache/waifu_" + event.senderID + ".png";
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
const leiamWaifu = (await axios.get(`${global.alice.api}/waifu?character=${leiamChat}`)).data;
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `missing character\n\nhow to use?\n${global.alice.prefix}waifu ⟨ character ⟩\n\ncharacters available:\n\n${leiamWaifu.characters.join(", ")}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`missing character\n\nhow to use?\n${global.alice.prefix}waifu ⟨ character ⟩\n\ncharacters available:\n\n${leiamWaifu.characters.join(", ")}`, event.threadID, event.messageID);
    }, event.messageID);
 } else if (leiamWaifu.error == `the character you entered “${leiamChat}” is not available in leiamnash database`) {
  await alice(event.senderID);
    api.chat({body: `the character you entered “${leiamChat}” is not available in leiamnash database\n\nhow to use?\n${global.alice.prefix}waifu ⟨ character ⟩\n\ncharacters available:\n\n${leiamWaifu.characters.join(", ")}`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`the character you entered “${leiamChat}” is not available in leiamnash database\n\nhow to use?\n${global.alice.prefix}waifu ⟨ character ⟩\n\ncharacters available:\n\n${leiamWaifu.characters.join(", ")}`, event.threadID, event.messageID);
    }, event.messageID);
} else {
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  const leiamGet = (await axios.get(leiamWaifu.image, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
    api.chat({body: `character: ${leiamWaifu.character}\nanime: ${leiamWaifu.anime}`, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    waifu,
    leiamnash
}