const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+play.js ${args.length} args`)
    return message.channel.send(createEmbed(`**Dungeon Quest Game**`, `[Click here](https://www.roblox.com/games/2414851778) to get redirected to the game`, greenColor, message.author));
};
