 const fs = require("fs");
 const leiamA = require("path").join(__dirname + "/../alice/system/leiamnashN.json");
 const leiamB = require("path").join(__dirname + "/../alice/system/leiamnashO.json");
 var leiamUser = require(__dirname + "/../alice/system/leiamnashN.json");
 var leiamGroup = require(__dirname + "/../alice/system/leiamnashO.json");

function leiamnash(){
 return{
  "name": "data",
  "author": "leiamnash",
  "version": "1.0.0", 
  "noPrefix": "data"
 }
}

async function data(event, api, alice) {
try{
if (!leiamUser.includes(event.senderID)) {
leiamUser.push(event.senderID);
fs.writeFileSync(leiamA, JSON.stringify(leiamUser, null, 2), 'utf-8');
} else if (!leiamGroup.includes(event.threadID)) {
leiamGroup.push(event.threadID);
fs.writeFileSync(leiamB, JSON.stringify(leiamGroup, null, 2), 'utf-8');
  }
 } catch (err) {} 
}

module.exports = {
    data,
    leiamnash
}