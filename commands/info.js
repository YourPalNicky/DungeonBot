const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const getTotalGuildMembers = require('./../functions/getTotalGuildMembers.js');
const getTotalGuilds = require('./../functions/getTotalGuilds.js');
const getCountdown = require('./../functions/getCountdown.js');
const {prefix, greenColor, redColor, owner, version} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+info.js ${args.length} args`)
    let totalSeconds = (client.uptime / 1000);
    let totalDays = Math.floor(totalSeconds / 86400);
    let totalHours = Math.floor(totalSeconds / 3600);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours % 24;
    let days = totalDays % 365;
    let years = Math.floor(days / 365.25);
    let infoEmbed = createEmbed('**Dungeon Bot Info**', '', greenColor, message.author)
    .addField('Creator', `<@${owner}>`, true)
    .addField('Bot Version', `${version}`, true)
    .addBlankField(false)
    .addField(`Invite Link`, `[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=560277919033720873&scope=bot&permissions=347200)`, true)
    .addBlankField(false)
    .addField('**Uptime**', `**${Math.floor(days)}** days, **${Math.floor(hours)}** hours, **${Math.floor(minutes)}** minutes and **${Math.floor(seconds)}** seconds.`)
    .setDescription(`Currently Listening to ${numberWithCommas(getTotalGuildMembers(client))} Members across ${numberWithCommas(getTotalGuilds(client))} Servers.`)
    .addField('__Bot Expiration Date__', `**Expires in** ${getCountdown()}`);
    try {
        message.author.send(infoEmbed);
        return message.channel.send(createEmbed(`**Success**`, `Info sent in your DMs`, greenColor, message.author));
    } catch (ex) {
        return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', "Unable to send message, make sure your DMs are turned on.", redColor, message.author));
    };
};