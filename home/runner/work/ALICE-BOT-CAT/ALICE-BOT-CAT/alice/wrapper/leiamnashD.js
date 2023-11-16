 const fs = require("fs");
 const axios = require("axios");

module.exports = async(leiam) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/leiamnash_" + leiam + ".png";
 const leiamGet = (await axios.get(`${global.alice.api}/alice/assets`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}