const createEmbed = require('./../functions/createEmbed.js');
const {prefix, greenColor, redColor} = require('./../config.json');
const cmds = (
      `${prefix}calc **[**Current Power**]** **[**Current Upgrades**]** **[**Total Upgrades**]**`
+   `\n${prefix}sellcalc **[**Current Sell Price**]** **[**Current # of Upgrades**]** **[**Total # of Upgrades**]**`
+   `\n${prefix}healthcalc **[**Current HP**]** **[**# of Stamina Points**]** **[**Total # of Points**]** **[**Desired HP**]**`
+   `\n${prefix}levelcalc **[**From Level**]** **[**To Level**]** | Tells you the required XP for that range`
+ `\n\n${prefix}play | __Links to the Dungeon Quest Game__`
+   `\n${prefix}wiki **[**Any item found on [this](https://docs.google.com/spreadsheets/d/1R3NAwcIuCEVhIxbhmqasS7sd0aeXnY5naGiOpeYoWwE/edit?usp=sharing) list**]** __OR__ ${prefix}wiki **[**list**]**`
+   `\n${prefix}examples | If you do not understand the commands well, this command will explain the functions and how to use the commands correctly.`
+   `\n${prefix}invite | Sends the Bot invite link so you can use it in your own server.`
);
exports.run = (client, message, args) => {
    console.log(`+help.js ${args.length} args`)
    let helpEmbed = createEmbed('**Help Menu**', '', greenColor, message.author)
    .addField('__User Commands__',`${cmds}`)
    .addField('__Other Bot Commands__', `${prefix}info\n${prefix}feedback **[**Feedback Message**]**`)
    try {
        message.author.send(helpEmbed);
        return message.channel.send(createEmbed(`**Success**`, `Help sent in your DMs.`, greenColor, message.author));
    } catch (ex) {
        return message.channel.send(createEmbed('**<:error:580162235624849418> Error <:error:580162235624849418>**', "Unable to send message, make sure your DMs are turned on.", redColor, message.author));
    };
};



