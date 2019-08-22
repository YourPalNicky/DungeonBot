const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+invite.js ${args.length} args`)
    return message.channel.send(createEmbed('**Invite Link**', `[Click Here](https://discordapp.com/oauth2/authorize?client_id=560277919033720873&scope=bot&permissions=347200)`, greenColor, message.author));
};
