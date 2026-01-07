const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('A small guide of all our commands.')
        .addSubcommand(subcommand =>
            subcommand.setName('posessions').setDescription('A list of all commands related to cursed posessions.'))
        .addSubcommand(subcommand =>
            subcommand.setName('equipment').setDescription('A list of all equipment commands.'))
        .addSubcommand(subcommand =>
            subcommand.setName('fun').setDescription('A list of all fun commands.'))
        .addSubcommand(subcommand =>
            subcommand.setName('general').setDescription('A list of all general commands.'))
        .addSubcommand(subcommand =>
            subcommand.setName('ghost').setDescription('A list of all ghost commands.'))
        .addSubcommand(subcommand =>
            subcommand.setName('maps').setDescription('A list of all map commands.'))
        .addSubcommand(subcommand =>
            subcommand.setName('impressum').setDescription('A list of who helped making this bot possible.'))
        .addSubcommand(subcommand =>
            subcommand.setName('rules').setDescription('Please review our rules, if you haven\'t already.')),

    async execute(interaction) {
        await interaction.deferReply();
        const subcommand = interaction.options.getSubcommand();

        try {
            // Base embed color
            const helpEmbed = new EmbedBuilder().setColor('#FF5A5A');

            // === POSSESSIONS SUBCOMMAND ===
            if (subcommand === 'posessions') {
                helpEmbed
                    .setTitle('Cursed Posessions')
                    .setDescription('Overview of all Cursed Posessions')
                    .addFields(
                        { name: 'Music Box', value: 'Command: /music-box' },
                        { name: 'Ouija Board', value: 'Command: /ouija-board' },
                        { name: 'Voodo Doll', value: 'Command: /voodo-doll' },
                        { name: 'Haunted Mirror', value: 'Command: /haunted-mirror' },
                        { name: 'Summoning Circle', value: 'Command: /summoning-circle' },
                        { name: 'Tarot Cards', value: 'Command: /tarot-cards' },
                        { name: 'Monkey Paw', value: 'Command: /monkey-paw' }
                    )
                    .setFooter({ text: 'Side note: It is guaranteed to get 1 cursed object in every game with standard difficulties. However this can be changed with custom difficulty!' });

            // === EQUIPMENT SUBCOMMAND ===
            } else if (subcommand === 'equipment') {
                helpEmbed
                    .setTitle('Equipment')
                    .setDescription('Overview of all equipment')
                    .addFields(
                        { name: 'Spirit Box', value: 'Command: /spirit-box', inline: true },
                        { name: 'Spirit Box Questions', value: 'Command: /spirit-questions', inline: true },
                        { name: 'Ghost Writing Book', value: 'Command: /writing-book', inline: true },
                        { name: 'EMF Reader', value: 'Command: /emf-reader', inline: true },
                        { name: 'UV light', value: 'Command: /uv-light', inline: true },
                        { name: 'Video Camera', value: 'Command: /video-camera', inline: true },
                        { name: 'Photo Camera', value: 'Command: /photo-camera', inline: true },
                        { name: 'Head gear', value: 'Command: /head-gear', inline: true },
                        { name: 'D.O.T.S. Projector', value: 'Command: /dots', inline: true },
                        { name: 'Firelight', value: 'Command: /firelight', inline: true },
                        { name: 'Crucifix', value: 'Command: /crucifix', inline: true },
                        { name: 'Igniter', value: 'Command: /igniter', inline: true },
                        { name: 'Motion Sensor', value: 'Command: /motion-sensor', inline: true },
                        { name: 'Sound Sensor', value: 'Command: /sound', inline: true },
                        { name: 'Parabolic microphone', value: 'Command: /parabolic', inline: true },
                        { name: 'Salt', value: 'Command: /salt', inline: true },
                        { name: 'Sanity medication', value: 'Command: /medication', inline: true },
                        { name: 'Incence', value: 'Command: /incence', inline: true },
                        { name: 'Flashlight', value: 'Command: /flashlight', inline: true },
                        { name: 'Thermometer', value: 'Command: /thermometer', inline: true },
                        { name: 'Tripod', value: 'Command: /tripod', inline: true },
                        { name: 'Soundrecorder', value: 'Command: /sound-recorder', inline: true }
                    )
                    .setFooter({ text: 'Boooo!' });

            // === FUN SUBCOMMAND ===
            } else if (subcommand === 'fun') {
                helpEmbed
                    .setTitle('Fun commands! :D')
                    .setDescription('Overview of all fun commands')
                    .addFields(
                        { name: '/roulette', value: 'Draw a random tarot card!' },
                        { name: '/challenge', value: 'The bot gives you a challenge.\nAlso try: /challenge itemban, /challenge language, /challenge only3' },
                        { name: '/rollitem', value: 'Rolls a random item for you. Can be used in for example photocam challenge.' },
                        { name: '/difficulty', value: 'The bot will choose a random difficulty for you!' }
                    )
                    .setFooter({ text: 'Boooo!' });

            // === GENERAL SUBCOMMAND ===
            } else if (subcommand === 'general') {
                helpEmbed
                    .setTitle('General Information')
                    .setDescription('Overview of general commands or information')
                    .addFields(
                        { name: '/activity-chart', value: 'A small guide to reading the activity chart', inline: true },
                        { name: '/body-photo', value: 'What you should know about taking dead body photos', inline: true },
                        { name: '/bone-photo', value: 'What you should know about taking bone photos', inline: true },
                        { name: '/sanity-drain', value: 'A small guide to how sanity drain works', inline: true },
                        { name: '/fingerprints', value: 'Tips about fingerprints', inline: true },
                        { name: '/footprints', value: 'Tips about footprints', inline: true },
                        { name: '/ghost-photo', value: 'Some info about ghost photos', inline: true },
                        { name: '/gtk', value: 'Stuff that is nice to know', inline: true },
                        { name: '/interaction-photo', value: 'Tips for taking photos of ghost interactions', inline: true },
                        { name: '/posession-photo', value: 'Tips for taking photos of cursed posessions', inline: true },
                        { name: '/media', value: 'Info about media and the rewards', inline: true },
                        { name: '/hunt-sanity', value: 'At what sanity ghosts can hunt you', inline: true },
                        { name: '/smudging', value: 'What you should know about smudging', inline: true },
                        { name: '/dirty-water-photo', value: 'Tips about taking dirty water photos', inline: true },
                        { name: '/video', value: 'What you should know about capturing videos', inline: true }
                    )
                    .setFooter({ text: 'Boooo!' });

            // === GHOST SUBCOMMAND WITH PAGINATION FIX ===
            } else if (subcommand === 'ghost') {
                // List of all ghosts
                const ghosts = [
                    'Spirit', 'Yokai', 'Wraith', 'Hantu', 'Phantom', 'Poltergeist',
                    'Jinn', 'Demon', 'Goryo', 'Onryo', 'Myling', 'Banshee', 'The Twins',
                    'Mare', 'Raiju', 'Revenant', 'Obake', 'Shade', 'Yurei', 'Oni',
                    'The Mimic', 'Moroi', 'Deogen', 'Thaye', 'Dayan', 'Gallu', 'Obambo'
                ];

                // Discord limits embeds to 25 fields max, so we chunk the ghosts
                const chunkSize = 25;
                const embeds = [];

                for (let i = 0; i < ghosts.length; i += chunkSize) {
                    const chunk = ghosts.slice(i, i + chunkSize);

                    const embed = new EmbedBuilder()
                        .setTitle('Ghosts')
                        .setDescription('Overview of all Ghosts')
                        .setColor('#FF5A5A')
                        .setFooter({ text: `Page ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(ghosts.length / chunkSize)}` })
                        .addFields(chunk.map(g => ({
                            name: g,
                            value: `Command: /ghost ${g.toLowerCase().replace(/ /g, '-')}`,
                            inline: true
                        })));

                    embeds.push(embed);
                }

                // Send first embed
                await interaction.editReply({ embeds: [embeds[0]] });

                // If more than one page, let the user know
                if (embeds.length > 1) {
                    await interaction.followUp({ content: `More ghosts are available. (Page 2 of ${embeds.length})`, ephemeral: true });
                }

            // === MAPS SUBCOMMAND ===
            } else if (subcommand === 'maps') {
                helpEmbed
                    .setTitle('Maps')
                    .setDescription('Overview of all the Maps')
                    .addFields(
                        { name: 'Bleasdale Farmhouse', value: 'Command: /bleasdale', inline: true },
                        { name: 'Grafton Farmhouse', value: 'Command: /grafton', inline: true },
                        { name: '10 Ridgeview Court', value: 'Command: /ridgeview', inline: true },
                        { name: '42 Edgefield Road', value: 'Command: /edgefield', inline: true },
                        { name: '6 TangleWood Drive', value: 'Command: /tanglewood', inline: true },
                        { name: '13 Willow Street', value: 'Command: /willow', inline: true },
                        { name: 'Brownstone High School', value: 'Command: /high-school', inline: true },
                        { name: 'Maple Lodge Campsite', value: 'Command: /maple-lodge-campsite', inline: true },
                        { name: 'Prison', value: 'Command: /prison', inline: true },
                        { name: 'Sunny Meadows Mental Institution', value: 'Command: /sunny-meadows', inline: true },
                        { name: 'Sunny Meadows Mental Institution - RESTRICTED', value: 'Command: /restricted-meadows', inline: true },
                        { name: 'Camp Woodwind', value: 'Command: /camp-woodwind', inline: true },
                        { name: 'Point Hope', value: 'Command: /point-hope', inline: true },
                        { name: "Nell's Diner", value: 'Command: /nells-diner', inline: true }
                    )
                    .setFooter({ text: 'Boooo!' });

            // === IMPRESSUM SUBCOMMAND ===
            } else if (subcommand === 'impressum') {
                helpEmbed
                    .setTitle('Impressum')
                    .setDescription('Info about ghosts, events and general stuff - Insym: \nhttps://www.youtube.com/watch?v=6c00T2duoEg \nhttps://www.twitch.tv/insym \n  \nMaps w/ cursed posession locations - Fantismal: \nhttps://imgur.com/a/iEI0tJo \n  \nEquipment, cursed objects, events: \nhttps://phasmophobia.fandom.com/wiki/Main_Page \n  \nMoroi, Deogen & Thaye - Psycho: \n https://www.youtube.com/watch?v=VjbCps35D5Q \nhttps://www.twitch.tv/psychohypnotic \n \nCoded by: \nNullody#5271 & juju~#2239 \n  \nSupport: https://discord.gg/wTTQSkCcPE')
                    .setFooter({ text: 'Boooo!' });

            // === RULES SUBCOMMAND ===
            } else if (subcommand === 'rules') {
                helpEmbed
                    .setTitle('Rules')
                    .setDescription('With reacting to this message you agree with all rules and accept consequences...')
                    .addFields(
                        { name: 'Rule 1', value: 'Treat everyone with respect. Absolutely no harassment, toxity, witch hunting, sexism, racism, or hate speech will be tolerated.' },
                        { name: 'Rule 2', value: 'No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.' },
                        { name: 'Rule 3', value: 'No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member.' },
                        { name: 'Rule 4', value: 'No swearing. We want to keep the server family friendly, so everyone can be here!' },
                        { name: 'Rule 5', value: 'Keep the chat English so everyone can understand!' },
                        { name: 'Rule 6', value: "Don't annoy members, stay respectful and have common sense. Things that aren't okay to do irl aren't okay to do here too!" },
                        { name: 'Rule 7', value: 'No trolling or bad behaviour in games. Keep it Friendly and supportive no matter who you play with and how good they are in the game!' }
                    )
                    .setFooter({ text: 'Enjoy your stay!' });
            }

            // Send the embed if not already sent (for non-ghost subcommands)
            if (subcommand !== 'ghost') {
                await interaction.editReply({ embeds: [helpEmbed] });
            }

        } catch (error) {
            console.error('Error in /help command:', error);
            await interaction.editReply('An error occurred while executing the command.');
        }
    }
};
