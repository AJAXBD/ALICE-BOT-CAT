 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "prefix",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "prefix"
 }
}

async function prefix(event, api) {
try{
const leiamFile = __dirname + "/cache/prefix_" + event.senderID + ".png";
const leiamChat = event.body.toLowerCase();
if (leiamChat == "prefix" || leiamChat == "prifex" || leiamChat == "prefex" || leiamChat == "prifix" || leiamChat == "bot prefix" || leiamChat == "bot prifix" || leiamChat == "bot prefex" || leiamChat == "bot prifex" || leiamChat == "bot" || leiamChat == "robot") {
  const leiamObj = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "💖", "💝", "🤍", "💟", "💕"];
  const leiamName = (await api.getUserInfo(event.senderID))[event.senderID].name;
const leiamGet = (await axios.get(`${global.alice.api}/alice/ran`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
api.chat({body: `hi ${leiamName}\n\nbot prefix: ${global.alice.prefix}\n\nplease use ⟨ ${global.alice.prefix}help ⟩  for commands category ${leiamObj[Math.floor(Math.random() * leiamObj.length)]}`, mentions: [{ tag: leiamName, id: event.senderID }], attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`hi ${leiamName}\n\nbot prefix: ${global.alice.prefix}\n\nplease use ⟨ ${global.alice.prefix}help ⟩  for commands category ${leiamObj[Math.floor(Math.random() * leiamObj.length)]}`, event.threadID, event.messageID);
   }, event.messageID);
  } 
 } catch (err) {} 
}

module.exports = {
    prefix,
    leiamnash
}