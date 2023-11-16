 const axios = require("axios");
 const fs = require("fs");

module.exports.makeWelcome = async({ file, avatar, userName, groupName, member }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/welcome_" + file + ".png";
  const leiamBack = `https://raw.githubusercontent.com/LeiamNashRebirth/alice/main/type/leiam${Math.floor(Math.random() * 5) + 1}.png`;
 const leiamget = (await axios.get(`${global.alice.api}/welcome?avatar=${avatar}&username=${userName}&groupName=${groupName}&groupImage=https://i.imgur.com/eAQLoYp.jpg&background=${leiamBack}&member=${member}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamget, 'utf-8'));
}

module.exports.makeGoodbye = async({ file, avatar, userName, groupName, member }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/goodbye_" + file + ".png";
  const leiamBack = `https://raw.githubusercontent.com/LeiamNashRebirth/alice/main/type/leiam${Math.floor(Math.random() * 5) + 1}.png`;
 const leiamget = (await axios.get(`${global.alice.api}/goodbye?avatar=${avatar}&username=${userName}&groupName=${groupName}&groupImage=https://i.imgur.com/eAQLoYp.jpg&background=${leiamBack}&member=${member}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamget, 'utf-8'));
}

module.exports.makeFbcover = async({ file, avatar, fullName, firstName, uid, link, gender }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/fbcover_" + file + ".png";
 const leiamget = (await axios.get(`${global.alice.api}/fbcover?avatar=${avatar}&fullName=${fullName}&firstName=${firstName}&phone=${uid}&email=${link}&location=${gender}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamget, 'utf-8'));
}