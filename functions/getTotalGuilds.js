module.exports = function(client) {
    console.log(`+getTotalGuilds.js`)
    let t = 0;
    client.guilds.forEach(guild => {t += 1;});
    return t;
};