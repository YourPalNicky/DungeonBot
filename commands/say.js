const createEmbed = require('./../functions/createEmbed.js');
const { greenColor, redColor, owner } = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+say.js ${args.length} args`)
    if (message.author.id == owner) {
        let channel = args[0];
        if (channel) {
            args.shift();
            let sayMessage = args.join(' ');
            let elements = sayMessage.split("|");
            if (elements.length > 1) {
                if (client.channels.has(channel)) {
                    let embed = createEmbed(`**${elements[0]}**`, elements[1], greenColor, '');
                    embed.setFooter('Dungeon Bot Administration', client.user.avatarURL);
                    client.channels.get(channel).send(embed);
                    return message.channel.send(createEmbed('**Success**', "Message was sent to channel by client.", greenColor, message.author));
                } else return message.channel.send(createEmbed('**Error**', "Client does not have channel or channel is null.", redColor, message.author));
            } else return message.channel.send(createEmbed('**Error**', "Correct Usage: Title | Description", redColor, message.author));
        } else return message.channel.send(createEmbed('**Error**', "Channel is null, please provide a valid channel.", redColor, message.author));
    } else return message.channel.send(createEmbed('**Error**', 'No Access', redColor, message.author));
};