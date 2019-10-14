const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+examples.js ${args.length} args`)
    let exampleEmbed = new createEmbed('**Command Examples**', 'All command examples', greenColor, message.author)
    .addField("Health Calculator:", `Let's say Joey has 30,000 HP and he wants to get to 45,000.\nIf he currently has 5 points in stamina and has 85 points total, he would say:\n\n\`${prefix}healthcalc 30000 5 85 45000\`\n\nThe command will tell you how many points of stamina you will need to get to at least a certain health.\nIf the command cannot get you there, it will max out your stamina points.`, false)
    .addBlankField()
    .addField("Cost and Stat Calculator:", `Let's say Vinny has an item with 1,000 power of one kind.\nIf it is currently upgraded 50 times and has 500 upgrades total, then he would say:\n\n\`${prefix}calc 1000 50 500\`\n\nThe upgrade cost is how much money it costs to upgrade it from 50 to 500 and the total power is how much power it will have once it is maxed.`)
    .addBlankField()
    .addField(`Experience and Level Calculator:`, `To determind how much XP you need to level up from a level to a level, use\n\`${prefix}levelcalc [From Level] [To Level]\`\n\nThe XP given back is the amount of XP you need to reach that level.`)

    try {
        message.author.send(exampleEmbed)
        .catch(console.error);
        return message.channel.send(createEmbed(`**Success**`, `Command examples sent in your DMs.`, greenColor, message.author));
    } catch (ex) {
        return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', "Unable to send message, make sure your DMs are turned on.", redColor, message.author));
    };
};