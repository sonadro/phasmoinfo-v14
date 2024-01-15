const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kill')
        .setDescription('Kills the Bot'),
    
    // execute command
    async execute(interaction) {
        await interaction.deferReply();
        const embed = new MessageEmbed()
        
    }
}