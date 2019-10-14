const createEmbed = require('./../functions/createEmbed.js');
const titleCase = require("./../functions/titleCase.js");
const { greenColor } = require('./../config.json');
exports.run = (client, message, args) => {
    console.log(`+wiki.js ${args.length} args`)
    if (args.length >= 1 && args.length <= 7)  {
        let identifier = args.join(' ').toLowerCase();
        let item = titleCase(identifier);
        let itemTag = titleCase(item).replace(/ /g, "_").replace(/'/g, "%27").replace(/Of/g, "of").replace(/,/g, "").trim();
        let link = `https://dungeonquestroblox.fandom.com/wiki/${itemTag}`; 
        return message.channel.send(createEmbed(`**${titleCase(item)}**`, `[Click Here](${link})`, greenColor, message.author));
    } else return message.channel.send(createEmbed(`**Dungeon Quest Wiki**`, `[Click Here](https://dungeonquestroblox.fandom.com/wiki/DungeonQuestRoblox_Wiki)`, greenColor, message.author));
};