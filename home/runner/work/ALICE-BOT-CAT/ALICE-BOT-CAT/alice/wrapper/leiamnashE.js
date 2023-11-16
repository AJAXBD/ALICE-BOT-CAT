 const axios = require("axios");
 const fs = require("fs");

module.exports.makeAniname = async({ firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/aniname_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/picname?text1=${firstName}&text2=${fullName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAnibanner = async({ facebook, firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/anibanner_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/anibanner?text1=${fullName}&text2=${facebook}&text3=${firstName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAnicover = async({ firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/anicover_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/anicover?text1=${firstName}&text2=${fullName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAniwrite = async({ firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/aniwrite_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/aniwrite?text1=${firstName}&text2=${fullName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAnimanga = async({ firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/animanga_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/animanga?text1=${firstName}&text2=${fullName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAnicard = async({ facebook, firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/anicard_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/anicard?text1=${firstName}&text2=${fullName}&text3=${facebook}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeFbname = async({ firstName, fullName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/fbname_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/fbname?text1=${firstName}&text2=${fullName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeBanner = async({ firstName, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/banner_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/banner?text=${firstName}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}