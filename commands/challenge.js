const { SlashCommandBuilder } = require('discord.js');

const sleep = require('../functions/sleep.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('challenge')
        .setDescription('Rolls a random challenge!')
        .addStringOption(option =>
            option
                .setName('type')
                .setDescription('Which type of challenge do you want? Leave empty for random.')
                .addChoices(
                    { name: 'bans one item', value: 'itemban' },
                    { name: 'random language', value: 'language' },
                    { name: 'only three items', value: 'only3' },
                )),

    // execute command
    async execute(interaction) {
        await interaction.deferReply();
        const userId = interaction.user.id;

        const challenges = ['**No Flashlight:** \nYou are not allowed to use aby type of flashlight (excluding the UV light)', "**Lockdown:** \nDon't leave the house until all objectives are done", '**Random item ban**', '**No evidence run:** \nYou are not allowed to collect any evidence <:fingerprints:939172335766880296>', '**Random language:** \nChange the language of your game to a random language!', '**No radio:** \nYou are not allowed to use the radio to communicate with your team <:kekw:940522307858878494>', '**No talking:** \nEveryone has to find evidence for themselves 🤫', '**No hiding:** \nPray that you can loop the ghost, or literally just run <:kekw:940522307858878494>', "**Hardcore lockdown:** \nDon't leave the Ghost room till you found all Evidence <:ghostii:1034051076183310347>", '**Only 3 items**', '**Confusion run:** \nEveryone has to be the same character <:smilechamp:913149648364011620>'];

        const challengeNames = ['No Flashlight', 'Lockdown', 'Random Item ban', 'No evidence run', 'Random language', 'No radio', 'No talking', 'No hiding', 'Hardcore Lockdown', 'Only 3 items', 'Confusion run'];

        const items = ['D.O.T.S. Projector', 'EMF Reader', 'Ghost Writing Book', 'Spirit Box', 'Thermometer', 'UV Light', 'Video Camera', 'firelight', 'Crucifix', 'Flashlight', 'Glowstick', 'Head gearCamera', 'Lighter', 'Motion Sensor', 'Parabolic Microphone', 'Photo Camera', 'Incence', 'Salt', 'Sanity medication', 'Sound Sensor', 'Tripod'];

        const languages = ['Portuguese', 'Spanish - Spain', 'Portuguese - Brazil', ' German', 'French', 'Italian', 'Bulgarian', 'Czech', 'Danish', 'Dutch', 'Finnish', 'Greek', 'Hungarian', 'Japanese', 'Korean', 'Norwegian', 'Polish', 'Romanian', 'Russian', 'Simplified Chinese', 'Swedish', 'Traditional Chinese', 'Turkish', 'Ukrainian'];

        // choose random challenge or get type from option
        const type = interaction.options.getString('type') ?? 'random';

        let rNum = Math.floor(Math.random() * challenges.length);
        if (type === 'itemban') {
            rNum = 2;
        } else if (type === 'language') {
            rNum = 4;
        } else if (type === 'only3') {
            rNum = 9;
        };

        // respond
        await interaction.editReply(`<@!${userId}>, your challenge is...`);
        // sleep(250);
        await interaction.editReply(`<@!${userId}>, your challenge is... **${challengeNames[rNum]}**`);
        // sleep(500);
        await interaction.editReply(`<@!${userId}>, your challenge is... ${challenges[rNum]}`);

        // challenges with additional responses
        if (rNum === 2) {
            // itemban
            const item = items[Math.floor(Math.random() * items.length)];
            sleep(500);
            await interaction.followUp(`And you are not allowed to use **${item}!**`);
        } else if (rNum === 4) {
            // random language
            const language = languages[Math.floor(Math.random() * languages.length)];
            sleep(500);
            await interaction.followUp(`And you have to set your game language to **${language}!**`);
        } else if (rNum === 9) {
            // only 3 tiems
            let uItems = [];
            
            for (i = 0; i < 3; i++) {
                const rNum2 = Math.floor(Math.random() * items.length);
                uItems.push(items[rNum2]);
                items.splice(rNum2, 1);
            };

            await interaction.followUp(`And you can only use the following items:\n${uItems[0]}\n${uItems[1]}\n${uItems[2]}`);
        };
    }
};