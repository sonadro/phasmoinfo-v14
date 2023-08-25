const { SlashCommandBuilder, EmbedBuilder, ModalSubmitFields, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('events')
        .setDescription('Get information about a ghost event.')

        // airball
        .addSubcommand(subcommand =>
            subcommand
                .setName('airball')
                .setDescription('Information about the "airball" ghost event.'))

        // manifest
        .addSubcommand(subcommand =>
            subcommand
                .setName('manifest')
                .setDescription('Information about the "manifest" ghost event.')),
    
    // execute
    async execute(interaction) {
        await interaction.deferReply();
        // global properties
        const eventsEmbed = new EmbedBuilder()
            .setColor('#FFF75E')
        
        // local properties
        if (interaction.options.getSubcommand() === 'airball') {
            eventsEmbed
                .setTitle('The "airball" ghost event')
                .setDescription('The "Airball" ghost event is an event in which the Ghost Manifests as a cloud of freezing breath, while it approaches you. When the breath reaches you, it will make a hissing sound. \nIt will drain sanity by 10%.')
                .setImage('https://j.gifs.com/pZLokX.gif')
                .setFooter({
                    text: 'Above is an example of what the Airball event looks like, when it is targetting a different player. \n \nAlso note that in this clip you can only see the breath through the video camera. When closer to the Event you can also see it without.'
                });
        } else if (interaction.options.getSubcommand() === 'manifest') {
            eventsEmbed
                .setTitle('The "Manifesting" ghost event')
                .setDescription('The "Manifesting" ghost event is an event in which the ghost will Manifest in full form, as a Shadow (preferred by shade), or Translucid Form.  The ghost can "Sing" during an event (Banshee prefer singing Ghost events). The event will last a minimum of 1 second. \n \nThe ghost will either stand still or or walk towards the targeted player. If it decides to walk, there is a chance that the ghost will make a hissing sound when it reaches the player. The hissing sound drain sanity by 10%. \n \n2 special type of events: \n- Red light (all lights in the room turn red) \n- Shatter light (the ghost will shatter/explode lightbulbs)')
                .setImage('https://j.gifs.com/83KzxL.gif')
                .setFooter({
                    text: 'Boooo! :D'
                });
        }
        await interaction.editReply({ embeds: [eventsEmbed] });
    }
}