 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "ytlink",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "ytlink"
 }
}

async function ytlink(event, api, alice) {
try{
const leiamFile = __dirname + "/cache/ytlink_" + event.senderID + ".mp4";
const leiamChat = event.body;
  if (leiamChat.startsWith("https://youtu.be/") || leiamChat.startsWith("https://www.youtube.com/watch") || leiamChat.startsWith("https://youtube.com/shorts") || leiamChat.startsWith("https://youtube.com/watch")) {
const leiamUrl = (await axios.get(`${global.alice.api}/ytdl?url=${leiamChat}`)).data.download;
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
    ytlink,
    leiamnash
}