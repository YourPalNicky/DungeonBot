const statusRefresh = require('./../functions/statusRefresh.js');
module.exports = (client) => {
    console.log('+guildCreate.js')
    statusRefresh(client);
};