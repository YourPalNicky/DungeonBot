const fs = require('fs');
module.exports = function (message) {
    console.log('+checkUser.js');
    var data = fs.readFileSync('./blacklistedUsers.txt');
    return (data.includes(message.author.id)) ? true : false;
};