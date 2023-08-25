const { SlashCommandBuilder } = require('discord.js');

// functions
const sleep = require('../functions/sleep.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setDescription('A bunch of fun commands for you to try out!')

    // difficulty
    .addSubcommand(subcommand =>
        subcommand
            .setName('difficulty')
            .setDescription('Rolls a random difficulty!'))

    // rollitem
    .addSubcommand(subcommand =>
        subcommand
            .setName('rollitem')
            .setDescription('Rolls a random item!'))

    // roulette
    .addSubcommand(subcommand =>
        subcommand
            .setName('roulette')
            .setDescription('Draws a random Tarot card!')),

    // execute command
    async execute(interaction) {
        await interaction.deferReply();
        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'difficulty') {
            const difficulties = ['Amateur', 'Intermediate', 'Professional', 'Nightmare', 'Random custom difficulty', 'Insanity', 'Challenge mode'];

            const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

            await interaction.editReply(`Your difficulty is **${difficulty}!**`);
        } else if (subcommand === 'rollitem') {
            const items = ['D.O.T.S. Projector', 'EMF Reader', 'Ghost Writing Book', 'Spirit Box', 'Thermometer', 'UV Light', 'Video Camera', 'firelight', 'Crucifix', 'Flashlight', 'Strong Flashlight', 'Glowstick', 'head gearCamera', 'Lighter', 'Motion Sensor', 'Parabolic Microphone', 'Photo Camera', 'incence', 'Salt', 'sanity medication', 'Sound Sensor', 'Tripod'];

            const item = items[Math.floor(Math.random() * items.length)];
            sleep(500);

            await interaction.editReply(`Your item is **${item}!**`);
        } else if (subcommand === 'roulette') {
            // the fool always has to be the last card!!!
            const cards = ['The Sun', 'The Moon', 'The Tower', 'The Wheel of Fortune', 'The Devil', 'The High Priestess', 'The Hanged Man', 'Death', 'The Hermit', 'The Fool'];

            // draw a random card
            const card = cards[Math.floor(Math.random() * cards.length)];

            // checking if card requires another action
            if (card === 'The Fool') {
                const foolCard = cards[Math.floor(Math.random() * cards.length -1)];

                await interaction.editReply(`Your card is ${foolCard}!`);
                sleep(500);
                await interaction.editReply(`Your card is ${foolCard}!\n**${card}!**`);
            } else if (card === 'The Wheel of Fortune') {
                await interaction.editReply(`Your card is ${card}!`);
                const colorPicker = Math.round(Math.random());

                if (colorPicker === 0) {
                    await interaction.editReply(`Your card is ${card}!\n**Green**`);
                } else if (colorPicker === 1) {
                    await interaction.editReply(`Your card is ${card}!\n**Red**`);
                }
            } else {
                await interaction.editReply(`Your card is ${card}!`);
            }
        };
    }
}