const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const {prefix, greenColor, redColor} = require('./../config.json');

exports.run = (client, message, args) => {
    console.log(`+healthcalc.js ${args.length} args`);
    if (args.length > 4) {
        let currentHealth = Math.round(Number(args[0].replace(/,/g, "")));
        let currentPoints = Math.round(Number(args[1].replace(/,/g, "")));
        let totalPoints = Math.round(Number(args[2].replace(/,/g, "")));
        let desiredHealth = Math.round(Number(args[3].replace(/,/g, "")));
        let baseHealth = Math.round(Number(currentHealth / (1 + currentPoints * 0.05)));
        if (baseHealth != null && totalPoints != null && currentPoints != null && desiredHealth != null && currentHealth != null) {
            if (currentPoints < totalPoints && currentPoints >= 0 && totalPoints >= 0 && totalPoints <= 400 && currentHealth < 10^7 && desiredHealth < 10^7 && baseHealth >= 100 && desiredHealth >= currentHealth) {
                let healthMath = currentHealth;
                let currentPointsMath = currentPoints;
                for (healthMath; healthMath < desiredHealth; healthMath = baseHealth + (currentPointsMath * 0.05 * baseHealth)) {
                    if (currentPointsMath >= totalPoints || healthMath >= desiredHealth) break; 
                    currentPointsMath++;
                };
                var responseA; var responseB;
                (healthMath >= desiredHealth) ? responseA = 'You will reach your desired health.' : responseA = 'You will not reach your desired health.';
                (currentPointsMath == totalPoints) ? responseB = `all of your` : responseB = `${numberWithCommas(currentPointsMath)}/${numberWithCommas(totalPoints)}`;
                let embed = createEmbed('**Health Calculator**', `To get from __${numberWithCommas(Math.round(currentHealth))} Health__ **=>** __${numberWithCommas(Math.round(healthMath))} Health__, you must use ${responseB} points. ${responseA}`, greenColor, message.author)
                .addField('Your New Health:', numberWithCommas(Math.round(healthMath)), true)
                .addField('Your Base Health:', numberWithCommas(Math.round(baseHealth)), true)
                .addBlankField(false)
                .addField('Points Remaining', `${totalPoints-currentPointsMath}/${totalPoints}`, true);
                return message.channel.send(embed);
            } else return message.channel.send(createEmbed(`**<:error:580162235624849418> Error <:error:580162235624849418>**`, 'Please stay within normal input ranges', redColor, message.author));
        } else return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', 'Some of the values are invalid. Please try again', redColor, message.author));
    } else return message.channel.send(createEmbed(`**Health Calculator**`, `${prefix}healthcalc **[**Current HP**]** **[**# of Stamina Points**]** **[**Total # of Points**]** **[**Desired HP**]**`, redColor, message.author));
};