const Discord = require('discord.js');
const fs = require('fs');
const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor, owner} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+blacklist.js ${args.length} args`)
    if (message.author.id == owner) {
        if (args.length > 0) {
            if (args[0] == 'list') {
                let data = fs.readFileSync('./blacklistedUsers.txt');
                if (data.length > 1) {
                    let userList = String(data).replace(/,/g, `\n`);
                    return message.channel.send(createEmbed('**Blacklisted Users**', userList, greenColor, message.author));
                } else return message.channel.send(createEmbed('**Error**', 'There are no users on the blacklist.', redColor, message.author));
            } else if (args.length > 1) {
                if (args[0] == 'add' || args[0] == 'remove') {
                    var user = message.mentions.members.first();
                    (!user) ? user = args[1] : user = user.id;
                    let data = fs.readFileSync('./blacklistedUsers.txt');
                    (args[0] == 'add') ? data = data += `${user},` : data = String(data).replace(`${user},`, "");
                    fs.writeFileSync('./blacklistedUsers.txt', data);
                    return message.channel.send(createEmbed('**Successifully Added/Removed User**', `${user} was removed/added to the blacklist successifully.`, greenColor, message.author));
                } else return message.channel.send(createEmbed('**Error**', "Please specify either `add` or `remove` and either ping a user or attach a userid. Or use `list` to view the blacklist.", redColor, message.author));
            } else return message.channel.send(createEmbed('**Error**', "Please specify either `add` or `remove` and either ping a user or attach a userid. Or use `list` to view the blacklist.", redColor, message.author));
        } else return message.channel.send(createEmbed('**Error**', "Please specify either `add` or `remove` and either ping a user or attach a userid. Or use `list` to view the blacklist.", redColor, message.author));
    } else return message.channel.send(createEmbed('**Error**', "No access.", redColor, message.author));
};