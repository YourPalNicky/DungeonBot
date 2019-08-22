const Discord = require('discord.js');
const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor, owner} = require('./../config.json');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const si = require('systeminformation');
exports.run = (client, message, args) => {
    console.log(`+sysinfo.js ${args.length} args`)
    if (message.author.id == owner) {
        if (!(args[0] == null) && !(args[0] == undefined)) {
            if (args[0].toLowerCase().startsWith(`cpu`)) {
                si.cpu(function(data) {
                    let embed = new Discord.RichEmbed()
                    .setTitle('**Bot Administrator Panel**')
                    .addField('**CPU Type**', `${data.manufacturer} ${data.brand} Model ${data.model}`)
                    .addField('**Current CPU Clock Speed**', `${data.speed} GHz`)
                    .addField('**Total CPU Cores**', `${data.cores}`)
                    .addField('**Physical CPU Cores**', data.physicalCores)
                    .setColor(greenColor)
                    .setTimestamp()
                    .setFooter(message.author.tag, message.author.avatarURL);
                    return message.channel.send(embed);
                });
            } else if (args[0].toLowerCase().startsWith('temp')) {
                si.cpuTemperature(function(data) {
                    let embed = createEmbed('**Bot Administrator Panel**', '', greenColor, message.author)
                    .addField('**Main Current Temperature**', `${Math.round((data.main*10))/10}°C / ${Math.round((data.main*9/4 + 32) * 10 )/10}°F`)
                    .addField('**Core Temperature**', `${Math.round((data.main*10))/10}°C / ${Math.round((data.main*9/4 + 32) * 10 )/10}°F`)
                    .addField('**Maximum Temperature**', `${Math.round((data.max*10))/10}°C / ${Math.round((data.max*9/4 + 32) * 10 )/10}°F`);
                    return message.channel.send(embed);
                });
            } else if (args[0].toLowerCase().startsWith('mem')) {
                si.mem(function(data) {
                    let embed = createEmbed('**Bot Administrator Panel**', '', greenColor, message.author)
                    .addField('**Total Memory**', `${numberWithCommas(Math.round(data.total/1048576))} MB`)
                    .addField('**Free Memory**', `${numberWithCommas(Math.round(data.free/1048576))} MB`)
                    .addField('**Used Memory**', `${numberWithCommas(Math.round(data.used/1048576))} MB`)
                    .addField('**Active Memory**', `${numberWithCommas(Math.round(data.active/1048576))} MB`)
                    .addField('**Available Memory**', `${numberWithCommas(Math.round(data.available/1048576))} MB`);
                    return message.channel.send(embed);
                });
            } else {
                let embed = createEmbed('**Bot Administrator Panel**', '__Correct Usage__\nMEM / CPU / TEMP', redColor, message.author);
                return message.channel.send(embed);
            };
        } else return message.channel.send(createEmbed('**Correct Usage**', 'MEM / CPU / TEMP / UPTIME', redColor, message.author));
    } else return message.channel.send(createEmbed('**Error**', `**No Access. This is a restricted command**`, redColor, message.author));

    
};