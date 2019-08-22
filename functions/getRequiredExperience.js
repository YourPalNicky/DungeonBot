const Discord = require('discord.js');
module.exports = function (level, level2) {
    console.log('+getRequiredExperience.js')
    let xp = 0;
    for (let x = level; x < level2; x++) xp += Math.floor((84 * Math.pow(1.13, x - 1) + 0.5));
    return xp;
};