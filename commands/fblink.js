 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "fblink",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "fblink"
 }
}

async function fblink(event, api, alice) {
try{
const leiamFile = __dirname + "/cache/fblink_" + event.senderID + ".mp4";
const leiamChat = event.body;
  if (leiamChat.startsWith("https://www.facebook.com/") || leiamChat.startsWith("https://fb.watch") || leiamChat.startsWith("https://www.facebook.com/reel/")) {
const leiamUrl = (await axios.get(`${global.alice.api}/facebook?download=${leiamChat}`)).data.HD;
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
    fblink,
    leiamnash
}