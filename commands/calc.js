const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const {prefix, greenColor, redColor} = require('./../config.json');
const upgradeList = [100, 156, 215, 278, 344, 415, 490, 570, 654, 743, 838, 938, 1044, 1157, 1276, 1403, 1537, 1679, 1830, 1990, 2159, 2339, 2529, 2731, 2945];
exports.run = (client, message, args) => {
    console.log(`+calc.js ${args.length} args`)
    if (args.length > 2) {
        let power = Math.round(Number(args[0].replace(/,/g, "")));
        let currentUpgrades = Math.round(Number(args[1].replace(/,/g, "")));
        let totalUpgrades = Math.round(Number(args[2].replace(/,/g, "")));
        let totalCost = 0;
        let increasePerUpgrade = 0;
        var upgradeLevel = 0;
        if (power != null && currentUpgrades != null && totalUpgrades != null) {
            if (power <= 9999999 && power > 0 && currentUpgrades <= 999999 && totalUpgrades <= 999999 && currentUpgrades < totalUpgrades) {
                var totalPower = power;
                var basePower = power;
                
                for (x = currentUpgrades; x < totalUpgrades; x++) {
                    (x < 25) ? increasePerUpgrade = upgradeList[x] : increasePerUpgrade = 2945 + 220 * (x-24);
                    var end = false;
                    if (increasePerUpgrade > 100000) {
                        totalCost += 100000(totalUpgrades - x);
                        end = true;
                    } else totalCost += increasePerUpgrade;
                    if (end) break;
                };
                for (let x = currentUpgrades; x < totalUpgrades; x++) {
                    upgradeLevel = totalPower * 0.05;
                    var end = false;
                    if (upgradeLevel >= 9) {
                        totalPower += 10(totalUpgrades - x);
                        end = true;
                    } else {
                        increasePerUpgrade = Math.floor(totalPower * 0.05 + 1);
                        totalPower += increasePerUpgrade;
                    };
                    if (end) break;
                };
                for (let y = currentUpgrades; y > 0; y = y-1) {
                    if (y < 0) break;
                    (basePower * 0.05 >= 9) ? increasePerUpgrade = 10 : increasePerUpgrade = Math.floor(basePower * 0.05 + 1);
                    basePower = basePower - increasePerUpgrade;
                    if (Math.round(basePower) <= 0) break;
                };
                if (!basePower) basePower = '0'; else basePower = numberWithCommas(Math.round(basePower));
                let embed = new createEmbed('**Calculation Complete**', '', greenColor, message.author)
                .addField('**Total Power** <:swords:580162306533752867>', `${numberWithCommas(totalPower)}`, true)
                .addField('**Upgrade Cost** <:coins:580167996694331402>', `${numberWithCommas(totalCost)}`, true)
                .addField('**Base Power** <:swords:580162306533752867>', `${basePower}`, true)
                return message.channel.send(embed);
            } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', 'Please stay within normal values. The power must be under 10,000,000 and the upgrades must be under 1,000,000', redColor, message.author));
        } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', 'One of the values is undefined or is null. Please type all values correctly.', redColor, message.author));
    } else return message.channel.send(createEmbed('**Item Calc**', `${prefix}calc **[**Current Power**]** **[**Current Upgrades**]** **[**Total Upgrades**]**`, redColor, message.author));
};