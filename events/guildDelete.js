const statusRefresh = require('./../functions/statusRefresh.js');
module.exports = (client) => {
    console.log('+guildDelete.js')
    statusRefresh(client);
};