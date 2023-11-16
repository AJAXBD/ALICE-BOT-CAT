 const fs = require("fs");
 const axios = require("axios");

function leiamnash(){
 return{
  "name": "image",
  "author": "leiamnash",
  "version": "1.0.2",
  "commandMap": {
  "image": {
    "func": "image",
    "cooldown": 10
   }
  }
 }
}

async function image(event, api, leiam, log, alice) {
try{
const leiamImage = [];
const aliceFile = __dirname + "/cache/leiamnash_" + event.senderID + ".png";
const leiam1 = __dirname + "/cache/image1_" + event.senderID + ".png";
const leiam2 = __dirname + "/cache/image2_" + event.senderID + ".png";
const leiam3 = __dirname + "/cache/image3_" + event.senderID + ".png";
const leiam4 = __dirname + "/cache/image4_" + event.senderID + ".png";
const leiam5 = __dirname + "/cache/image5_" + event.senderID + ".png";
const leiam6 = __dirname + "/cache/image6_" + event.senderID + ".png";
const leiam7 = __dirname + "/cache/image7_" + event.senderID + ".png";
const leiam8 = __dirname + "/cache/image8_" + event.senderID + ".png";
const leiam9 = __dirname + "/cache/image9_" + event.senderID + ".png";
const leiamChat = leiam.join(" ");
  if (!leiamChat) {
  await alice(event.senderID);
    api.chat({body: `search cannot be left blank\n\nhow to use?\n${global.alice.prefix}image ⟨ search ⟩\n\nexample:\n${global.alice.prefix}image alice sao`, attachment: fs.createReadStream(aliceFile)}, event.threadID, (err) => {
  fs.unlinkSync(aliceFile);
    if (err) return api.chat(`search cannot be left blank\n\nhow to use?\n${global.alice.prefix}image ⟨ search ⟩\n\nexample:\n${global.alice.prefix}image alice sao`, event.threadID, event.messageID);
    }, event.messageID);
         return;
 }
  const leiamRes = (await axios.get(`${global.alice.api}/image?search=${leiamChat}`)).data.results;
  api.chat(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, event.threadID, () => api.setMessageReaction("✅", event.messageID, (err) => {}, true), event.messageID);
const leiamA = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam1, Buffer.from(leiamA, 'utf-8'));
const leiamB = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam2, Buffer.from(leiamB, 'utf-8'));
const leiamC = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam3, Buffer.from(leiamC, 'utf-8'));
const leiamD = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam4, Buffer.from(leiamD, 'utf-8'));
const leiamE = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam5, Buffer.from(leiamE, 'utf-8'));
const leiamF = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam6, Buffer.from(leiamF, 'utf-8'));
const leiamG = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam7, Buffer.from(leiamG, 'utf-8'));
const leiamH = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam8, Buffer.from(leiamH, 'utf-8'));
const leiamI = (await axios.get(leiamRes[Math.floor(Math.random () * leiamRes.length)].preview.url, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiam9, Buffer.from(leiamI, 'utf-8'));
  for (var leiamLoop = 1; leiamLoop <= 9; leiamLoop++) {
    const leiamFile = `${__dirname}/cache/image${leiamLoop}_${event.senderID}.png`;
leiamImage.push(fs.createReadStream(leiamFile).on("end", () => {
    fs.unlinkSync(leiamFile);
 }));
}
  api.chat({body: `𝗶𝗺𝗮𝗴𝗲 𝘀𝗲𝗮𝗿𝗰𝗵 𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝗳𝗼𝗿\n⟨ ${leiamChat} ⟩`, attachment: leiamImage}, event.threadID, (err) => {
    if (err) return api.chat(`Error: {\nstatus: 3792\nsummary: {\n'leiamnash server is offline',\n'this is temporary issue please request again'\n'undefined leiamnash server'\n},\nalicezetion: this error happens if your account get muted by facebook\n}`, event.threadID, event.messageID);
  }, event.messageID);
 } catch (err) { 
  log.err(err); 
  api.chat(`Error: {\nstatus: 9299\nsummary: {\n'leiamnash server is offline',\nconnection refuse to response,\n},\nhttp: cannot get data from leiamnash server\n}`, event.threadID, () => api.setMessageReaction("❎", event.messageID, (err) => {}, true), event.messageID);
 } 
}

module.exports = {
    image,
    leiamnash
}