const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const getRequiredExperience = require('./../functions/getRequiredExperience.js');
const {prefix, greenColor, redColor} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+levelcalc.js ${args.length} args`);
    if (args.length > 1) {
        let level = Math.round(Number(args[0]));
        let level2 = Math.round(Number(args[1]));
        if (level >= 0 && level != null && level < 400 && level2 > 0 && level2 < 400 && level < level2) {
            return message.channel.send(createEmbed(`**XP Calculator**`, `${numberWithCommas(Math.round(getRequiredExperience(level, level2)))} XP is required to level from ${level} to level ${level2}.`, greenColor, message.author));
        } else return message.channel.send(createEmbed(`**<:error:580162235624849418> Error <:error:580162235624849418>**`, `Please stay within normal level ranges.`, redColor, message.author));
    } else return message.channel.send(createEmbed(`**Level Calculator**`, `${prefix}levelcalc **[**From Level**]** **[**To Level**]**`, redColor, message.author));
};