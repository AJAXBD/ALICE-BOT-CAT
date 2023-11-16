 const turl = require("turl");
 const axios = require("axios");
 const fs = require("fs");

function leiamnash(){
 return{
  "name": "imgtext",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "imgtext": {
    "func": "imgtext",
    "cooldown": 10 
   }
  }
 }
}

async function imgtext(event, api, leiam, log, alice) {
try{
 const file = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
 const leiamChat = leiam.join(" ");
if (event.type == "message_reply") {
   const leiamUrl = await turl.shorten(event.messageReply.attachments[0].url);
  api.setMessageReaction("✅", event.messageID, (err) => {}, true);
 const leiamText = (await axios.get(`${global.alice.api}/imgtext?url=${leiamUrl}`)).data.result;
  api.chat(leiamText, event.threadID, event.messageID);
 } else if (!leiamChat) {
    await alice(event.senderID);
    api.chat({body: `attachment not found\n\nhow to use?\n${global.alice.prefix}imgtext ⟨ image reply ⟩`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`attachment not found\n\nhow to use?\n${global.alice.prefix}imgtext ⟨ image reply ⟩`, event.threadID, event.messageID);
    }, event.messageID);
 } else {
  await alice(event.senderID);
    api.chat({body: `please reply on chat message\n\nhow to use?\n${global.alice.prefix}imgtext ⟨ image reply ⟩`, attachment: fs.createReadStream(file)}, event.threadID, (err) => {
    fs.unlinkSync(file);
    if (err) return api.chat(`please reply on chat message\n\nhow to use?\n${global.alice.prefix}imgtext ⟨ image reply ⟩`, event.threadID, event.messageID);
   }, event.messageID);
  }
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    imgtext,
    leiamnash
}