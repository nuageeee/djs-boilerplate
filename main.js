require('dotenv').config();
const fs = require("node:fs");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

client.commands = new Collection();

module.exports = client;

fs.readdirSync('./handler').forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);