 const axios = require("axios");
 const fs = require("fs");

module.exports.makeGura = async({ name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/gura_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/gura?text=${name}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKaneki = async({ name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/kaneki_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/kaneki?text=${name}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKawaii = async({ name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/kawaii_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/kawaii?text1=${name}&text2=%20`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKing = async({ name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/king_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/king?text1=${name}&text2=%20`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeKohirui = async({ name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/kohirui_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/kohiruimaki?text=${name}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}