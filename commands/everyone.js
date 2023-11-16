function leiamnash(){
 return{
  "name": "everyone",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "everyone": {
    "func": "everyone",
    "cooldown": 60
   }
  }
 }
}

async function everyone(event, api, leiam, log) {
try{
const leiamGroup = (await api.getThreadInfo(event.threadID));
const leiamUser = leiamGroup.participantIDs;
leiamUser.splice(leiamUser.indexOf(api.getCurrentUserID()), 1);
var body = "@", mentions = []
for (let leiamData = 0; leiamData < leiamUser.length; leiamData++) {
if (leiamData == body.length) body += "@";
mentions.push({
    tag: body[leiamData],
    id: leiamUser[leiamData],
    fromIndex: leiamData
 });
}
api.chat({ body, mentions }, event.threadID, event.messageID);
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    everyone,
    leiamnash
}