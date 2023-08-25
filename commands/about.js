const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('About this bot.'),
    
    // execute command
    async execute(interaction) {
        await interaction.deferReply();
        const embed = new EmbedBuilder()
            .setTitle('About the Phasmoinfo bot')
            .setDescription('This bot can help you when playing Phasmophobia!')
            .addFields(
                { name: 'What does this bot do? ', value: 'This bot aids you in your Phasmophobia experience, by providing useful information about ghosts, maps, cursed items, equipment, etc.'},
                { name: 'How do I use this bot? ', value: 'I now have slash commands! Type /help, and choose a subcommand to get started!'},
                { name: 'Credits: ', value: '/impressum or /help impressum'}
            ).setFooter({
                text: 'If you find any typos and/or misinformation, please contact support! Wonder who to contact? Try /impressum',
            });
        
        // respond
        await interaction.editReply({ embeds: [embed] });
    }
}