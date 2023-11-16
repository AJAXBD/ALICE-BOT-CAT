 const fs = require("fs");
 const axios = require("axios");
 
function leiamnash(){
 return{
  "name": "greet",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "greet"
 }
}

async function greet(event, api) {
try{
const leiamFile = __dirname + "/cache/greet" + event.senderID + ".png";
const leiamChat = event.body.toLowerCase();
if (leiamChat == "hi" || leiamChat == "hello" || leiamChat == "helo" || leiamChat == "hilo" || leiamChat == "hola" || leiamChat == "ola" || leiamChat == "sup" || leiamChat == "yo" || leiamChat == "heyo" || leiamChat == "konnichiwa" || leiamChat == "kamusta" || leiamChat == "musta" || leiamChat == "zup" || leiamChat == "guys" || leiamChat == "konichiwa" || leiamChat == "hillo" || leiamChat == "hilo" || leiamChat == "hey" || leiamChat == "👋" || leiamChat == "morning" || leiamChat == "good morning" || leiamChat == "wazup" || leiamChat == "wazzup" || leiamChat == "wasup" || leiamChat == "wassup" || leiamChat == "yu" || leiamChat == "minna") {
  const leiamObj = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "💖", "💝", "🤍", "💟", "💕"];
  const leiamName = (await api.getUserInfo(event.senderID))[event.senderID].name;
const leiamGet = (await axios.get(`${global.alice.api}/alice/ran`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
api.chat({body: `hi ${leiamName} ${leiamObj[Math.floor(Math.random() * leiamObj.length)]}\n\nhow are you today`, mentions: [{ tag: leiamName, id: event.senderID }], attachment: fs.createReadStream(leiamFile)}, event.threadID, (err) => {
    fs.unlinkSync(leiamFile);
    if (err) return api.chat(`hi ${leiamName} ${leiamObj[Math.floor(Math.random() * leiamObj.length)]}\n\nhow are you today`, event.threadID, event.messageID);
   }, event.messageID);
  } 
 } catch (err) {} 
}

module.exports = {
    greet,
    leiamnash
}