const { SlashCommandBuilder } = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Latency check for bot'),
  execute(interaction) {
  let API = new Date();
  interaction.reply(`test ${API}`)
  }
};