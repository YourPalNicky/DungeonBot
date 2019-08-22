const { prefix } = require('./../config.json');
const getTotalGuildMembers = require('./../functions/getTotalGuildMembers.js');
const getTotalGuilds = require('./../functions/getTotalGuilds.js');
const numberWithCommas = require('./../functions/numberWithCommas.js');
const fs = require('fs');
module.exports = (client) => {
    let data = JSON.parse(fs.readFileSync('./variables.json'));
    let activity = data["activity"];
    console.log('+statusRefresh.js')
    client.user.setStatus('online');
    (activity == 'servers') ? client.user.setActivity(`over ${getTotalGuilds(client)} Servers | ${prefix}help`, {type: "WATCHING"}) : client.user.setActivity(`${numberWithCommas(getTotalGuildMembers(client))} Users | ${prefix}help`, {type: "LISTENING"});
    function error(err) {
        console.error(err);
    };
};
