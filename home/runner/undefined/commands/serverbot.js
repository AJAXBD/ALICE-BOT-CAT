 const fs = require("fs");
 const path = require("path").join(__dirname + "/../alice/system/leiamnashM.json");
 var leiamData = require(__dirname + "/../alice/system/leiamnashM.json");
 
function leiamnash(){
 return{
  "name": "serverbot",
  "author": "leiamnash",
  "version": "1.0.2", 
  "noPrefix": "serverbot"
 }
}

async function serverbot(event, api, alice) {
try{
  const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
  const leiamChat = event.body;
  const leiamName = (await api.getUserInfo(event.senderID))[event.senderID].name;
  if (leiamChat.includes("the command you type doesn't exist in my system you mean") || leiamChat.includes("Hi I'm always here") || leiamChat.includes("Unable to re-add members") || leiamChat.includes("th member of this group, please enjoy") || leiamChat.includes("Command not found , is that") || leiamChat.includes("╭────CMD────╮") || leiamChat.includes("has been left the group") || leiamChat.includes("You have no permission to use command") || leiamChat.includes("ay sinubukang iunsent ang Mensaheng ito") || leiamChat.includes("Japanese word of the day is") || leiamChat.includes("~Auto Greet~") || leiamChat.includes("Active antiout mode") || leiamChat.includes("»ANNOUNCEMENT FOR ALL GROUPS«") || leiamChat.includes("Reply to this announcement if you want to continue chating with admin(s)") || leiamChat.includes("The group's preset is") || leiamChat.includes("for commands category") || leiamChat.includes("How may I help you?") || leiamChat.includes("❌Missing input!") || leiamChat.includes("You have been detected as a bot so you will be banned to avoid spam") || leiamChat.includes("automatically banned") || leiamChat.includes("AI language model") || leiamChat.includes("┌────── ～●～ ──────┐") || leiamChat.includes("help ⟩ for commands category") || leiamChat.includes("╔════ஜ") || leiamChat.includes("𝗂𝗇𝖺𝗉𝗉𝗋𝗈𝗉𝗋𝗂𝖺𝗍𝖾 𝖻𝖾𝗁𝖺𝗏𝗈𝗂𝗋 𝗂𝖿 𝗒𝗈𝗎 𝗍𝗁𝗂𝗇𝗄 𝗍𝗁𝗂𝗌 𝗂𝗌 𝗐𝗋𝗈𝗇𝗀 𝗉𝗅𝖾𝖺𝗌𝖾 𝗋𝖾𝖺𝖼𝗁 𝗎𝗌") || leiamChat.includes("your keyboard hero level has reached level") || leiamChat.includes("your alicization is now on level") || leiamChat.includes("remove this voice message") || leiamChat.includes("remove this message") || leiamChat.includes ("remove 1 attachment") || leiamChat.includes ("remove 2 attachment") || leiamChat.includes ("remove 3 attachment") || leiamChat.includes ("remove 4 attachment") || leiamChat.includes ("remove 5 attachment") || leiamChat.includes ("remove 6 attachment") || leiamChat.includes ("remove 7 attachment") || leiamChat.includes ("remove 8 attachment") || leiamChat.includes ("remove 9 attachment")) {
 api.setMessageReaction("⚠️", event.messageID, (err) => {}, true); 
 leiamData.push(event.senderID);
fs.writeFileSync(path, JSON.stringify(leiamData, null, 2), 'utf-8');
   await alice(event.senderID);
   api.chat({body: `𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\n${leiamName}\n\nyou have been automatically banned to alice server system to avoid spamming activities`, mentions: [{tag: leiamName, id: event.senderID}], attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
    fs.unlinkSync(aliceFile);
 api.chat(`𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\n\nname: ${leiamName}\nuid: ${event.senderID}\n\nprofile:\nhttps://facebook.com/${event.senderID}`, global.alice.admin);
    if (err) return api.chat(`𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\n${leiamName}\n\nyou have been automatically banned to alice server system to avoid spamming activities`, event.threadID, event.messageID);
    }, event.messageID);
  } 
 } catch (err) {} 
}

module.exports = {
    serverbot,
    leiamnash
}