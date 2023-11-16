 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "tiklink",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "tiklink"
 }
}

async function tiklink(event, api, alice) {
try{
const leiamFile = __dirname + "/cache/tiklink_" + event.senderID + ".mp4";
const leiamChat = event.body;
  if (leiamChat.startsWith("https://vt.tiktok.com/") || leiamChat.startsWith("https://www.tiktok.com/") || leiamChat.startsWith("https://tiktok.com/")) {
const leiamUrl = (await axios.get(`${global.alice.api}/tiktok?download=${leiamChat}`)).data.noWatermark;
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiamGet = (await axios.get(leiamUrl, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
api.chat({body: ``, attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.setMessageReaction("❎", event.messageID, (err) => {}, true);
   }, event.messageID);
  } 
 } catch (err) {} 
}

module.exports = {
    tiklink,
    leiamnash
}