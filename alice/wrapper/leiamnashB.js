 const axios = require("axios");
 const fs = require("fs");

module.exports.makeAds = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/ads_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/ads?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAffect = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/affect_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/affect?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeAniface = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/aniface_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/aniface?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeBeautiful = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/beautiful_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/beautiful?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeBroken = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/broken_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/broken?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeBurn = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/burn_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/burn?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeClown = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/clown_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/clown?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeErase = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/erase_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/delete?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeHitler = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/hitler_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/hitler?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeJail = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/jail_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/jail?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makePaint = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/paint_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/paint?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makePatrick = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/patrick_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/patrick?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makePoutine = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/poutine_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/poutine?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeRip = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/rip_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/rip?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeStonk = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/stonk_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/stonk?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeTrash = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/trash_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/trash?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeTrigger = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/trigger_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/trigger?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeWanted = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/wanted_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/wanted?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeGangbang = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/gangbang_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/gangbang?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeGay = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/gay_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/gay?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeEgg = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/egg_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/egg?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeDeepfry = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/deepfry_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/deepfry?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeMirror = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/mirror_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/mirror?image=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}

module.exports.makeCreampie = async({ user, file }) => {
  const leiamFile = "/home/runner/" + process.env.REPL_SLUG + "/commands/cache/creampie_" + file + ".png";    
 const leiamGet = (await axios.get(`${global.alice.api}/creampie?image1=https://i.imgur.com/ZLq7sdN.jpg&image2=${user}`, { responseType: 'arraybuffer'})).data;
fs.writeFileSync(leiamFile, Buffer.from(leiamGet, 'utf-8'));
}