const Discord = require('discord.js');
const createEmbed = require('./createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
module.exports = function(client) {
    console.log(`+getTotalGuilds.js`)
    let t = 0;
    client.guilds.forEach(guild => {
        t += 1;
    });
    return t;
};