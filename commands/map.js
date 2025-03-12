const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('map')
        .setDescription('Get information or help with any map!')

        // bleasdale
        .addSubcommand(subcommand =>
            subcommand
                .setName('bleasdale')
                .setDescription('Information about Bleasdale'))

        // campsite
        .addSubcommand(subcommand =>
            subcommand
                .setName('maple-lodge-campsite')
                .setDescription('Information about Campsite'))

        // edgefield
        .addSubcommand(subcommand =>
            subcommand
                .setName('edgefield')
                .setDescription('Information about Edgefield'))

        // grafton
        .addSubcommand(subcommand =>
            subcommand
                .setName('grafton')
                .setDescription('Information about grafton'))

        // high school
        .addSubcommand(subcommand =>
            subcommand
                .setName('high-school')
                .setDescription('Information about high school'))

        // prison
        .addSubcommand(subcommand =>
            subcommand
                .setName('prison')
                .setDescription('Information about prison'))

        // restricted meadows
        .addSubcommand(subcommand =>
            subcommand
                .setName('restricted-meadows')
                .setDescription('Information about restricted meadows'))

        // ridgeview
        .addSubcommand(subcommand =>
            subcommand
                .setName('ridgeview')
                .setDescription('Information about ridgeview'))

        // sunny meadows
        .addSubcommand(subcommand =>
            subcommand
                .setName('sunny-meadows')
                .setDescription('Information about sunny meadows'))

        // tanglewood
        .addSubcommand(subcommand =>
            subcommand
                .setName('tanglewood')
                .setDescription('Information about tanglewood'))

        // willow
        .addSubcommand(subcommand =>
            subcommand
                .setName('willow')
                .setDescription('Information about willow'))

        // camp woodwind
        .addSubcommand(subcommand =>
            subcommand
                .setName('camp-woodwind')
                .setDescription('Information about camp woodwind'))

        // point hope
        .addSubcommand(subcommand =>
            subcommand
                .setName('point-hope')
                .setDescription('Information about point hope')),

        // execute command
        async execute(interaction) {
            const subcommand = interaction.options.getSubcommand();

            // global embed properties
            const mapEmbed = new EmbedBuilder()
                .setColor('#FFFFFF')
                .setFooter({
                    text: 'Boooo! :D'
                });

            // local embed properties
            if (subcommand === 'bleasdale') {
                mapEmbed
                    .setTitle('Bleasdale Farmhouse')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '20', inline: true}
                    )
                    .setImage('https://i.imgur.com/N6q04Cx.png');
            } else if (subcommand === 'maple-lodge-campsite') {
                mapEmbed
                    .setTitle('Maple Lodge Campsite')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '25', inline: true}
                    )
                    .setImage('https://i.imgur.com/vCA4Kzm.png');
            } else if (subcommand === 'edgefield') {
                mapEmbed
                    .setTitle('42 Edgefield Road')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '16', inline: true}
                    )
                    .setImage('https://i.imgur.com/yISiSIS.png');
            } else if (subcommand === 'grafton') {
                mapEmbed
                    .setTitle('Grafton Farmhouse')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '13', inline: true}
                    )
                    .setImage('https://i.imgur.com/vGfqalT.png');
            } else if (subcommand === 'high-school') {
                mapEmbed
                    .setTitle('Brownstone High School')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '58', inline: true}
                    )
                    .setImage('https://i.imgur.com/kvEgctD.png');
            } else if (subcommand === 'prison') {
                mapEmbed
                    .setTitle('Prison')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '29', inline: true}
                    )
                    .setImage('https://i.imgur.com/q0doTXo.png');
            } else if (subcommand === 'restricted-meadows') {
                mapEmbed
                    .setTitle('Sunny Meadows Mental Institution - RESTRICTED')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '> 17', inline: true}
                    )
                    .setImage('https://i.imgur.com/cyn4pmb.png');
            } else if (subcommand === 'ridgeview') {
                mapEmbed
                    .setTitle('10 Ridgeview Court')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '16', inline: true}
                    )
                    .setImage('https://i.imgur.com/fcQEVsv.png');
            } else if (subcommand === 'sunny-meadows') {
                mapEmbed
                    .setTitle('Sunny Meadows Mental Institution')
                    .addFields(
                        { name: '**Size:** ', value: 'Large', inline: true},
                        { name: '**Rooms:** ', value: '69', inline: true}
                    )
                    .setImage('https://i.imgur.com/o4RlLfu.png');
            } else if (subcommand === 'tanglewood') {
                mapEmbed
                    .setTitle('6 Tanglewood Drive')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '11', inline: true}
                    )
                    .setImage('https://i.imgur.com/66UE6pL.png');
            } else if (subcommand === 'willow') {
                mapEmbed
                    .setTitle('13 Willow Street')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '10', inline: true}
                    )
                    .setImage('https://i.imgur.com/mtlgVFE.png');
            } else if (subcommand === 'camp-woodwind') {
                mapEmbed
                    .setTitle('Camp Woodwind')
                    .addFields(
                        { name: '**Size:** ', value: 'Small', inline: true},
                        { name: '**Rooms:** ', value: '11', inline: true}
                    )
                    .setImage('https://i.imgur.com/x9xYfaC.png');
            } else if (subcommand === 'point-hope') {
                mapEmbed
                    .setTitle('Point Hope')
                    .addFields(
                        { name: '**Size:** ', value: 'Medium', inline: true},
                        { name: '**Rooms:** ', value: '12', inline: true}
                    )
                    .setImage('https://i.imgur.com/cokEgMe.png');
            };

            // respond
            interaction.reply({ embeds: [mapEmbed] });
        }
};