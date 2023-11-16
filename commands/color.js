function leiamnash(){
 return{
  "name": "color",
  "author": "leiamnash",
  "version": "1.0.0",
  "commandMap": {
  "color": {
    "func": "color",
    "cooldown": 10
   }
  }
 }
}

async function color(event, api, leiam, log) {
try{
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
const leiam = [ "196241301102133", "169463077092846", "2442142322678320", "234137870477637", "980963458735625", "175615189761153", "2136751179887052", "2058653964378557", "2129984390566328", "174636906462322", "1928399724138152", "417639218648241", "930060997172551", "164535220883264", "370940413392601", "205488546921017", "809305022860427" ];
api.changeThreadColor(leiam[Math.floor(Math.random() * leiam.length)], event.threadID, (err) => {
  if (err) return api.chat("Error: {\nstatus: 8246\nsummary: {\n'cannot change thread color',\n'alicezetion refuse to connect'\n }\n}", event.threadID, event.messageID);
  });
 } catch (err) { 
  log.err(err);
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    color,
    leiamnash
}