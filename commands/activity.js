const fs = require('fs');
const createEmbed = require('./../functions/createEmbed.js');
const { owner, redColor, greenColor } = require('./../config.json');
const statusRefresh = require('./../functions/statusRefresh.js');
exports.run = (client, message, args) => {
    console.log('+activity.js');
    if(message.author.id == owner) {
        let data = JSON.parse(fs.readFileSync('./variables.json'));
        let activity = data['activity'];
        var writeActivity;
        (activity == 'servers') ? writeActivity = 'members' : writeActivity = 'servers';
        data["activity"] = writeActivity;
        fs.writeFileSync("./variables.json", JSON.stringify(data, null, 2));
        statusRefresh(client);
        return message.channel.send(createEmbed('**Successfully Changed Activity**', 'The bots activity was updated.', greenColor, message.author));
    } else return message.channel.send(createEmbed('**Error**', 'No Access', redColor));
};