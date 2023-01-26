const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('general-info')
        .setDescription('General info about Phasmophobia')

    // activity chart
    .addSubcommand(subcommand =>
        subcommand
            .setName('activity-chart')
            .setDescription('What you should know about the activity chart'))
            
    // dead body photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('body-photo')
            .setDescription('What you should know about taking dead body photos'))

    // bone photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('bone-photo')
            .setDescription('What you should know about taking bone photos'))

    // sanity drain
    .addSubcommand(subcommand =>
        subcommand
            .setName('sanity-drain')
            .setDescription('What you should know about sanity drain'))

    // fingerprints
    .addSubcommand(subcommand =>
        subcommand
            .setName('fingerprints')
            .setDescription('What you should know about fingerprints'))

    // footprints
    .addSubcommand(subcommand =>
        subcommand
            .setName('footprints')
            .setDescription('What you should know about footprints'))

    // ghost photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('ghost-photo')
            .setDescription('What you should know about taking ghost photos'))

    // gtk
    .addSubcommand(subcommand =>
        subcommand
            .setName('gtk')
            .setDescription('Stuff that is good to know'))

    // interactions
    .addSubcommand(subcommand =>
        subcommand
            .setName('interaction-photo')
            .setDescription('What you should know about taking ghost interaction photos'))

    // cursed posession photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('posession-photo')
            .setDescription('What you should know about taking cursed posession photos'))

    // photo rewards
    .addSubcommand(subcommand =>
        subcommand
            .setName('photo-rewards')
            .setDescription('What you should know about taking photos in general'))

    // sanity
    .addSubcommand(subcommand =>
        subcommand
            .setName('hunt-sanity')
            .setDescription('What sanity ghosts can hunt at'))

    // smudge sticks
    .addSubcommand(subcommand =>
        subcommand
            .setName('smudging')
            .setDescription('What you should know about using smudge sticks'))

    // dirty water photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('dirty-water-photo')
            .setDescription('What you should know about taking dirty water photos')),

    // execute command
    // async execute(interaction) {

    // }
}