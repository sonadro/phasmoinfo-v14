const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('A small guide of all our commands.')

        // about
        .addSubcommand(subcommand =>
            subcommand
                .setName('about')
                .setDescription('About this bot.'))

        // posessions
        .addSubcommand(subcommand =>
            subcommand
                .setName('posessions')
                .setDescription('A list of all commands related to cursed posessions.'))

        // equipment
        .addSubcommand(subcommand =>
            subcommand
                .setName('equipment')
                .setDescription('A list of all equipment commands.'))

        // fun
        .addSubcommand(subcommand =>
            subcommand
                .setName('fun')
                .setDescription('A list of all fun commands.'))

        // general
        .addSubcommand(subcommand =>
            subcommand
                .setName('general')
                .setDescription('A list of all general commands.'))

        // ghost
        .addSubcommand(subcommand =>
            subcommand
                .setName('ghost')
                .setDescription('A list of all ghost commands.'))

        // maps
        .addSubcommand(subcommand =>
            subcommand
                .setName('maps')
                .setDescription('A list of all map commands.'))

        // impressum
        .addSubcommand(subcommand =>
            subcommand
                .setName('impressum')
                .setDescription('A list of who helped making this bot possible.'))

        // rules
        .addSubcommand(subcommand =>
            subcommand
                .setName('rules')
                .setDescription('Please review our rules, if you haven\'t already.')),

    // execute command
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();

        // all menus has this base-embed
        const helpEmbed = new EmbedBuilder()
            .setColor('#FF5A5A')

        if (subcommand === 'about') {
            // update embed
            helpEmbed
                .setTitle('About the Phasmoinfo bot')
                .setDescription('This bot can help you when playing Phasmophobia!')
                .addFields(
                    { name: 'What does this bot do? ', value: 'This bot aids you in your Phasmophobia experience, by providing useful information about ghosts, maps, cursed items, equipment, etc.'},
                    { name: 'How do I use this bot? ', value: 'I now have slash commands! Type /help, and choose a category to get started!'},
                    { name: 'Credits: ', value: '/impressum or /help impressum'}
                ).setFooter({
                    text: 'If you find any typos and/or misinformation, please contact support! Wonder who to contact? Try /impressum',
                })
        } else if (subcommand === 'cursed') {
            // update embed
            helpEmbed
                .setTitle('Cursed Posessions')
                .setDescription('Overview of all Cursed Posessions')
                .addFields(
                    { name: 'Music Box', value: 'Command: /music-box' },
                    { name: 'Ouija Board', value: 'Command: /ouija-board' },
                    { name: 'Voodo Doll', value: 'Command: /voodo-doll' },
                    { name: 'Haunted Mirror', value: 'Command: /haunted-mirror' },
                    { name: 'Summoning Circle', value: 'Command: /summoning-circle' },
                    { name: 'Tarot Cards', value: 'Command: /tarot-cards'},
                ).setFooter({
                    text: 'Side note: It is guaranteed to get 1 cursed object in every game with standard difficulties. However this can be changed with custom difficulty!',
                })
        } else if (subcommand === 'equip') {
            // update embed
            helpEmbed
                .setTitle('Equipment')
                .setDescription('Overview of all equipment')
                .addFields(
                    { name: 'Spirit Box', value: 'Command: /spirit-box', inline: true },
                    { name: 'Spirit Box Questions', value: 'Command: /spirit-questoins',inline: true },
                    { name: 'Ghost Writing Book', value: 'Command: /writing-book', inline: true },
                    { name: 'EMF Reader', value: 'Command: /emfreader', inline: true },
                    { name: 'UV Flashlight & Glowstick', value: 'Command: /uv-light', inline: true },
                    { name: 'Video Camera & Head Mounted Camera', value: 'Command: /video-cam', inline: true },
                    { name: 'Photo Camera', value: 'Command: /photo-cam', inline: true },
                    { name: 'D.O.T.S. Projector', value: 'Command: /dots', inline: true },
                    { name: 'Candle', value: 'Command: /candle', inline: true },
                    { name: 'Crucifix', value: 'Command: /crucifix', inline: true },
                    { name: 'Lighter', value: 'Command: /lighter', inline: true },
                    { name: 'Motion Sensor', value: 'Command: /motion-sensor', inline: true },
                    { name: 'Sound Sensor & Parabolic Microphone', value: 'Command: /sound', inline: true },
                    { name: 'Salt', value: 'Command: /salt', inline: true },
                    { name: 'Sanity Pills', value: 'Command: /sanity-pills', inline: true },
                    { name: 'Smudge Sticks', value: 'Command: /smudge-sticks', inline: true },
                    { name: 'Flashlight', value: 'Command: /flashlight', inline: true },
                    { name: 'Thermometer', value: 'Command: /thermometer', inline: true },
                    { name: 'Tripod', value: 'Command: /tripod', inline: true },
                ).setFooter({
                    text: 'Boooo!',
                })
        } else if (subcommand === 'fun') {
            // update embed
            helpEmbed
                .setTitle('Fun commands! :D')
                .setDescription('Overview of all fun commands')
                .addFields(
                    { name: '/roulette', value: 'Draw a random tarot card!' },
                    { name: '/challenge', value: 'The bot gives you a challenge.\nAlso try: /challenge itemban, /challenge language, /challenge only3' },
                    { name: '/rollitem', value: 'Rolls a random item for you. Can be used in for example photocam challenge.' },
                    { name: '/difficulty', value: 'The bot will choose a random difficulty for you!' },
                ).setFooter({
                    text: 'Boooo!',
                })
        } else if (subcommand === 'general') {
            // update embed
            helpEmbed
                .setTitle('General Information')
                .setDescription('Overview of general commands or information')
                .addFields(
                    { name: 'Good to Know', value: 'Helpful knowledge. Command: /gtk', inline: true},
                    { name: 'Activity Chart', value: 'Command: /activity', inline: true},
                    { name: 'Photo priority System', value: 'Command: /pics', inline: true},
                    { name: 'How to use Smudge Sticks', value: 'Command: /smudging', inline: true},
                    { name: 'What ghost can hunt at what sanity?', value: 'Command: /sanity', inline: true},
                    { name: 'How fast do you loose sanity', value: 'Command: /sanity-drain', inline: true},
                    {name: 'Ghost Events', value: `Command: /airball, /manifest `},
                )
                .setFooter({
                    text: 'Boooo!',
               })
        } else if (subcommand === 'ghost') {
            // update embed
            helpEmbed
                .setTitle('Ghosts')
                .setDescription('Overview of all Ghosts')
                .addFields(
                    { name: 'Spirit', value: 'Command: /spirit', inline: true},
                    { name: 'Yokai', value: 'Command: /yokai', inline: true},
                    { name: 'Wraith', value: 'Command: /wraith', inline: true},
                    { name: 'Hantu', value: 'Command: /hantu', inline: true},
                    { name: 'Phantom', value: 'Command: /phantom', inline: true},
                    { name: 'Poltergeist', value: 'Command: /poltergeist', inline: true},
                    { name: 'Jinn', value: 'Command: /jinn', inline: true},
                    { name: 'Demon', value: 'Command: /demon', inline: true},
                    { name: 'Goryo', value: 'Command: /goryo', inline: true},
                    { name: 'Onryo', value: 'Command: /onryo', inline: true},
                    { name: 'Myling', value: 'Command: /myling', inline: true},
                    { name: 'Banshee', value: 'Command: /banshee', inline: true},
                    { name: 'The Twins', value: 'Command: /twins', inline: true},
                    { name: 'Mare', value: 'Command: /mare', inline: true},
                    { name: 'Raiju', value: 'Command: /raiju', inline: true},
                    { name: 'Revenant', value: 'Command: /revenant', inline: true},
                    { name: 'Obake', value: 'Command: /obake', inline: true},
                    { name: 'Shade', value: 'Command: /shade', inline: true},
                    { name: 'Yurei', value: 'Command: /yurei', inline: true},
                    { name: 'Oni', value: 'Command: /oni', inline: true},
                    { name: 'The Mimic', value: 'Command: /mimic', inline: true},
                    { name: 'Moroi', value: 'Command: /moroi', inline: true},
                    { name: 'Deogen', value: 'Command: /deogen', inline: true},
                    { name: 'Thaye', value: 'Command: /thaye', inline: true}
                )
                .setFooter({
                    text: 'Boooo!',
            })
        } else if (subcommand === 'maps') {
            // update embed
            helpEmbed
                .setTitle('Maps')
                .setDescription('Overview of all the Maps')
                .addFields(
                    { name: 'Bleasdale Farmhouse', value: 'Command: /bleasdale', inline: true},
                    { name: 'Grafton Farmhouse', value: 'Command: /grafton', inline: true},
                    { name: '10 Ridgeview Court', value: 'Command: /ridgeview', inline: true},
                    { name: '42 Edgefield Road', value: 'Command: /edgefield', inline: true},
                    { name: '6 TangleWood Drive', value: 'Command: /tanglewood', inline: true},
                    { name: '13 Willow Street', value: 'Command: /willow', inline: true},
                    { name: 'Brownstone High School', value: 'Command: /highschool', inline: true},
                    { name: 'Maple Lodge Campsite', value: 'Command: /Campsite', inline: true},
                    { name: 'Prison', value: 'Command: /prison', inline: true},
                    { name: 'Sunny Meadows Mental Institution', value: 'Command: /sunny-meadows', inline: true},
                    { name: 'Sunny Meadows Mental Institution - RESTRICTED', value: 'Command: /meadows-restricted', inline: true},
                    { name: 'Camp Woodwind', value: 'Command: /woodwind', inline: true}
                )
                .setFooter({
                    text: 'Boooo!',
            })
        } else if (subcommand === 'impressum') {
            // update embed
            helpEmbed
                .setTitle('Impressum')
                .setDescription('\nInfo about ghosts, events and general stuff - Insym: \nhttps://www.youtube.com/watch?v=6c00T2duoEg \nhttps://www.twitch.tv/insym \n  \nMaps w/ cursed posession locations - Fantismal: \nhttps://imgur.com/a/iEI0tJo \n  \nEquipment, cursed objects, events: \nhttps://phasmophobia.fandom.com/wiki/Main_Page \n  \nMoroi, Deogen & Thaye - Psycho: \n https://www.youtube.com/watch?v=VjbCps35D5Q \nhttps://www.twitch.tv/psychohypnotic \n \nCoded by: \nNullody#5271 & juju~#2239 \n  \nSupport: https://discord.gg/wTTQSkCcPE')
                .setFooter({
                    text: 'Boooo!',
            })
        } else if (subcommand === 'rules') {
            // update embed
            helpEmbed
                .setTitle('Rules')
                .setDescription('With reacting to this message you agree with all rules and accept consequences when following them. <:ghostii:1034051076183310347>')
                .addFields(
                    { name: 'Rule 1', value: 'Treat everyone with respect. Absolutely no harassment, toxity, witch hunting, sexism, racism, or hate speech will be tolerated.'},
                    { name: 'Rule 2', value: 'No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.'},
                    { name: 'Rule 3', value: 'No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member.'},
                    { name: 'Rule 4', value: 'No swearing. We want to keep the server family friendly, so everyone can be here!'},
                    { name: 'Rule 5', value: 'Keep the chat English so everyone can understand!'},
                    { name: 'Rule 6', value: "Don't annoy members, stay respectful and have common sense. Things that aren't okay to do irl aren't okay to do here too!"},
                    { name: 'Rule 7', value: 'No trolling or bad behaviour in games. Keep it Friendly and supportive no matter who you play with and how good they are in the game!'})
                .setFooter({
                    text: 'Enjoy your stay!',
                })
        }

        // once embed has been updated, send it!
        await interaction.reply({ embeds: [helpEmbed] });
    }
}