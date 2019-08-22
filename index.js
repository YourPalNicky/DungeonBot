const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const si = require('systeminformation');
const statusRefresh = require('./functions/statusRefresh.js');
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.on('ready', () => {
  statusRefresh(client);
})
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-&')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading ${commandName}...`);
    client.commands.set(commandName, props);
  });
});

client.functions = new Enmap();

fs.readdir("./functions/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-&')) return;
    let props = require(`./functions/${file}`);
    let functionName = file.split(".")[0];
    console.log(`Loading ${functionName}...`);
    client.functions.set(functionName, props);
  });
});

client.events = new Enmap();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    if (file.startsWith('-&')) return;
    let props = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loading ${eventName}...`);
    client.events.set(eventName, props);
  });
});
client.login(config.token);