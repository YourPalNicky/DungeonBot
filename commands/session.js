const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas');
const { greenColor } = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+session.js ${args.length} args`);
    let totalSeconds = (client.uptime / 1000);
    let totalDays = Math.floor(totalSeconds / 86400);
    let totalHours = Math.floor(totalSeconds / 3600);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours % 24;
    let days = totalDays % 365;
    let years = Math.floor(days / 365.25);
    let embed = createEmbed('**Session Info**', `**${days}** Days, **${hours}** Hours, **${minutes}** Minutes and **${Math.round(seconds)}** Seconds.}`, greenColor, message.author);
    return message.channel.send(embed);
};
