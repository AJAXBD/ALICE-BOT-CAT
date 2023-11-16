 const axios = require("axios");
 const fs = require("fs");

module.exports.makeHub = async({ avatar, name, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/hub_" + file + ".png"; 
 const leiamGet = (await axios.get(`${global.alice.api}/porno?image=${avatar}&name=${name}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}