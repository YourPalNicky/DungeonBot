const fs = require('fs');
module.exports = function (message) {
    console.log('+checkUser.js');
    var data = fs.readFileSync('./blacklistedUsers.txt');
    if (data.includes(message.author.id)) {
        return true;
    } else {
        return false;
    };
};