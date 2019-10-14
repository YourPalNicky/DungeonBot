const Discord = require('discord.js');
const { owners, greenColor} = require('./../config.json');
const sleep = require('./../functions/sleep.js');
exports.run = (client, message, args) => {
    if (owners.includes(message.author.id)) {
        if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
        const commandName = args[0];
        // Check if the command exists and is valid
        if(!client.commands.has(commandName)) {
          return message.reply("That command does not exist");
        }
        // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`./${commandName}.js`)];
        // We also need to delete and reload the command from the client.commands Enmap
        client.commands.delete(commandName);
        const props = require(`./${commandName}.js`);
        client.commands.set(commandName, props);
        let emoji1 = '█';
        let emoji2 = '▒';
        var emoji1ct = 1;
        var emoji2ct = 20-emoji1ct;
        let embed = new Discord.RichEmbed()
        .setTitle('**Reloading...**')
        .setDescription(emoji1.repeat(emoji1ct) + emoji2.repeat(emoji2ct))
        .setColor(greenColor)
        .setTimestamp()
        .setFooter('Dungeon Bot Administration', client.user.avatarURL);
        message.channel.send(embed).then((sent) => {
            while (emoji1ct < 19) {
                sleep(2500);
                emoji1ct++;
                emoji2ct = 20-emoji1ct;
                embed.setDescription(emoji1.repeat(emoji1ct) + emoji2.repeat(emoji2ct));
                sent.edit(embed);
            };
            sleep(3500);
            embed.setTitle('**Reloaded!**');
            embed.setDescription('All Done!');
            return sent.edit(embed); 
        });
    };
};