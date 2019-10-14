const checkUser = require('./../functions/checkUser.js');
const talkedRecently = new Set();
const { chatcooldown } = require('./../config.json');
module.exports = (client, message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().indexOf(client.config.prefix) !== 0) return;
  if (checkUser(message)) return;

  if (chatcooldown != 0) {
    if (talkedRecently.has(message.author.id)) {
      message.channel.send(`<@${message.author.id}> Slow down! You are on a cooldown.`); return;
    } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, chatcooldown * 1000);
    };
  };
  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
  };