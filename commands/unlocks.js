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
            .setImage('https://media.discordapp.net/attachments/939102825328283669/1428824601504387163/image.png?ex=68f3e81b&is=68f2969b&hm=b572c2e14147b2562b4b3bc9751597ed1db0eb4941164b683f3e829b6f850205&=&format=webp&quality=lossless&width=1209&height=1052')
            .setColor('#FFF75E')
            .setFooter({
                text: 'If you find any typos and/or misinformation, please contact support! Wonder who to contact? Try /impressum'
            });
        
        // respond
        await interaction.reply({ embeds: [embed] });
    }
};