const Discord = require('discord.js');
const createEmbed = require('./createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
module.exports = function(client) {
    console.log(`+getTotalGuildMembers.js`)
    let tsmembers = 0;
    client.guilds.forEach(guild => {
        var members = guild.memberCount;
        tsmembers += members;
    });
    return tsmembers;
};