 const axios = require("axios");
 const fs = require("fs");

module.exports.makeBed = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/bed_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/bed?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKiss = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/kiss_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/kiss?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeSlap = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/slap_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/slap?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeSpank = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/spank_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/spank?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeLick = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/lick_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/lick?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeMarry = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/marry_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/marry?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeShip = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/ship_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/partner?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeRankcard = async({ avatar, level, name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/rankcard_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/rankcard?avatar=${avatar}&level=${level}&name=${name}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeSuck = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/suck_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/blowjob?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeFuck = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/fuck_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/fuck?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeCouple = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/couple_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/couple?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeWife = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/wife_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/wife?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makePartner = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/partner_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/ship?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeFinger = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/finger_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/finger?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makePhotoner = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/photoner_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/photoner?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeCum = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/cum_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/cum?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKissme = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/kissme_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/kissme?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeSegs = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/segs_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/mommy?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeMilk = async({ avatar1, avatar2, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/milk_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/milk?image1=${avatar1}&image2=${avatar2}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}