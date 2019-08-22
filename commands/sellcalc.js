const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const {prefix, greenColor, redColor} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+sellcalc.js ${args.length} args`)
    if (args.length > 2) {
        let sellPrice = Math.round(Number(args[0]));
        let currentUpgrades = Math.round(Number(args[1]));
        let totalUpgrades = Math.round(Number(args[2]));
        let increasePerUpgrade = 0;
        if (sellPrice >= 100 && currentUpgrades >= 0 && totalUpgrades > 0 && currentUpgrades < 9999 && totalUpgrades < 9999 && sellPrice < 500000000) {
            if (currentUpgrades < totalUpgrades) {
                while (currentUpgrades > 0) {
                    currentUpgrades = currentUpgrades - 1;
                    sellPrice -= Math.round(sellPrice / 6.7245896556);
                };
                for (x = currentUpgrades; x < totalUpgrades; x++) {
                    (x < 25) ? increasePerUpgrade = [100, 156, 215, 278, 344, 415, 490, 570, 654, 743, 838, 938, 1044, 1157, 1276, 1403, 1537, 1679, 1830, 1990, 2159, 2339, 2529, 2731, 2945][x] : increasePerUpgrade = 2945 + 220 * (x-24);
                    sellPrice += Math.round( increasePerUpgrade / 6.7245896556);
                };
                return message.channel.send(createEmbed('**Calculation Complete**', `This item will sell for **${numberWithCommas(sellPrice)} Gold**\n\n\n**WARNING**:\nPlease advise that this command has proven to be inaccurate, use it at your own digression.`, greenColor, message.author));
            } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', 'You cannot downgrade an item.', redColor, message.author));
        } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', 'Please stay within normal values.', redColor, message.author));
    } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', `${prefix}sellcalc **[Current Sell Price]** **[Current Upgrades]** **[Total Upgrades]**`, redColor, message.author));
};

