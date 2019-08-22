const Discord = require('discord.js');
module.exports = function (title, description, color, author) {
    console.log('+createEmbed.js')
    let embed = new Discord.RichEmbed()
    .setTitle(title)
    .setColor(color)
    .setTimestamp();
    if (author) embed.setFooter(author.tag, author.avatarURL);
    if (description) embed.setDescription(description);
    console.log('-createEmbed.js');
    return embed;
};
