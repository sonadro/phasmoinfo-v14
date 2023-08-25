const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlocks')
        .setDescription('Shows at what level you unlock equipment.'),

    // execute command
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Equipment level requirements')
            .setDescription('Ever wondered at what level you\'ll unlock your next equipment upgrade? This is the place!')
            .setImage('https://cdn.discordapp.com/attachments/938798386361020448/1144362396572471458/image.png')
            .setColor('#FFF75E')
            .setFooter({
                text: 'If you find any typos and/or misinformation, please contact support! Wonder who to contact? Try /impressum'
            });
        
        // respond
        await interaction.reply({ embeds: [embed] });
    }
};