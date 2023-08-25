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

    // Ultraviolet
    .addSubcommand(subcommand =>
        subcommand
            .setName('ultraviolet')
            .setDescription('What you should know about Ultraviolet'))

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

    // incence
    .addSubcommand(subcommand =>
        subcommand
            .setName('smudging')
            .setDescription('What you should know about using incence'))

    // dirty water photo
    .addSubcommand(subcommand =>
        subcommand
            .setName('dirty-water-photo')
            .setDescription('What you should know about taking dirty water photos')),

    // execute command
    async execute(interaction) {
        await interaction.deferReply();
        const subcommand = interaction.options.getSubcommand();

        // global embed properties
        const generalEmbed = new EmbedBuilder()
            .setColor('#FFF75E')
            .setFooter({
                text: 'Boooo! :D'
            });

        // local embed properties
        if (subcommand === 'activity-chart') {
            generalEmbed
                .setTitle('Activity Chart')
                .setDescription('The Activity Chart is the fourth monitor in the Van, which shows the current activity ranging from 0 to 10')
                .addFields(
                    { name: '**Overview of Evidences given by the Chart:**', value: "- Short and tall activity spike might be a multithrow by Poltergeist \n- If the activity jumps from 0 to 5, and stays for a bit before dropping back to 0, it might be EMF Level 5 \n- If the activity goes up, stops for a second and go up even more it might be a Twins double interaction"},
                );
        } else if (subcommand === 'body-photo') {
            generalEmbed
                .setTitle('Dead Body Photo')
                .setDescription('A photo of a player that has been killed by the ghost. **Counts once Per player per Dead Body!**\nKeep in mind that a Dead Body Pic is one of the least valuable Pictures you can take.')
                .setImage('https://cdn.discordapp.com/attachments/923208644588359700/931254638999666718/unknown.png');
        } else if (subcommand === 'bone-photo') {
            generalEmbed
                .setTitle('Bone Picture')
                .setDescription('Once Per Game! Picking up the Bone gives extra XP and money. \nThere are different types of Bones, the Bone seen below is just an example!')
                .setImage('https://media.discordapp.net/attachments/937732109735452714/938121505026490438/unknown.png');
        } else if (subcommand === 'sanity-drain') {
            generalEmbed
                .setTitle('Sanity drain')
                .setDescription('Your sanity will drain depending on Light and Ghostevents')
                .addFields(
                    { name: "**Drain Percentage**", value: "At 100% Saity drain settings: **Solo Large Map** 3%, **Small Map** 7,2% per Minute \n**Multiplayer Large Map** 6%, **Small Map** 14,4% per Minute \n **With Firelight in Hand** depening on the Tier (/firelight) \n**Standing in light** depending on how much light you are exposed to \n**Ghost Event** 10% (except Oni and Banshee singing Ghost event) \n**Ghost reveal/hunt and Ghost within 10m** 0,2% per Second"},
                );
        } else if (subcommand === 'ultraviolet') {
            generalEmbed
                .setTitle('Ultraviolet')
                .setDescription('Once per left evidence! UV light does have to be shining on the ultraviolet or been charged to take a picture to count towards monetary rewards.')
                .setFooter({
                    text: `Booooo!`}
                );
        } else if (subcommand === 'ghost-photo') {
            generalEmbed
                .setTitle('Ghost Picture')
                .setDescription('A photo of the ghost physically manifesting, whether as part of a ghost event, with D.O.T.S evidence or during a hunt')
                .setImage('https://cdn.discordapp.com/attachments/923208644588359700/931976376372830239/unknown.png');
        } else if (subcommand === 'gtk') {
            generalEmbed
                .setTitle('Good to know')
                .setDescription('General information that will help finding the type of Ghost')
                .addFields(
                    { name: '**Evidence:**', value: "- Ghostwriting and D.O.T.S. **can now be evidence of the same Ghost.** \nIf you place the Ghost Writing book next to the DOTS Projector you will be able to notice if the ghost throws the book without writing in it. **This means ghost writing is NOT an evidence (excluding nightmare)!** \n- All Ghosts have 100% chance to leave ultraviolet and footprints (when it is an evidence) except the Obake and the Mimic mimicing an Obake (75% chance) \nUltraviolet evidence stay for 2 minutes (Obake has a chance to leave them for only 1 minute) \n- Freezing ghosts can lower the temperature to -10°C, non-freezing ghosts to 1°C"},
                    { name: '**General:**', value: "- If the ghost turns off the breaker, the lights will come back on when you turn the breaker on. \n- After a cursed Hunt all hunts will be longer and only has a grace period of 1 second, before it can kill you."}
                );
        } else if (subcommand === 'interaction-photo') {
            generalEmbed
                .setTitle('Interactions')
                .setDescription('Once per interaction! Most ghost activities count as interactions, such as a thrown object. A burned Crucifix or Ghost Writing will count as an interaction when Pic is taken while the Ghost interacts with it.')
                .setImage('https://cdn.discordapp.com/attachments/923208644588359700/931571739455029278/unknown.png');
        } else if (subcommand === 'posession-photo') {
            generalEmbed
                .setTitle('Cursed Posession Picture')
                .setDescription('Once per contract and Object! Can be take before or after use. You can not take a picture of a broken Ouija Board!')
                .setImage('https://media.discordapp.net/attachments/937732109735452714/938121419403968542/unknown.png');
        } else if (subcommand === 'photo-rewards') {
            generalEmbed
                .setTitle('Photo Rewards')
                .setDescription('Money reward given for all types of Pics. The Item placed the best in the Pic will count!')
                .addFields(
                    { name: '**How it works:**', value: `You will get a set amount of money and XP per photo you take!`},
                    { name: '**Rewards**', value: "**$5 - 3 star / $2 - 2 star / $1 - 1 star:** \nDead body (p.body), Interaction, Ultraviolet evidence, Cursed possessions (p.item), Salt pile stepped in, Ghost writing \n \n**$10 - 3 star / $5 - 2 star / $2 - 1 star** \nUsed crucifix, Dirty water (p.water), Bone (p.bone) \n \n**$20 - 3 star / $10 - 2 star / $5 - 1 star** \nGhost (p.ghost) "}
                );
        } else if (subcommand === 'hunt-sanity') {
            generalEmbed
                .setTitle('Hunt Sanity Percentage')
                .setDescription('Each Ghost have a different range of Sanity when it can initiate a Hunt')
                .addFields(
                    { name: "**Hunt Percentage**", value: "**Yokai** 80% if someone is talking nearby \n**Demon** 70%, or any sanity (rare ability) \n**Onryo** 60% if there are no firelights nearby \n**Mare** 60% if no lights are on, 40% when lights are on in the Ghost area \n**Raiju** 65% when there is electrical equipment around \n**Shade** 35% \n**Banshee** 50%, but will only check their targets sanity in multiplayer \n**Deogen** 40% \n**Thaye** 75%, lowers by 6% every time it ages \n**Not mentioned** 50%"},
                );
        } else if (subcommand === 'smudging') {
            generalEmbed
                .setTitle('Smudging')
                .setDescription("Time range of how long Ghost get's prevent from Hunting by incence")
                .addFields(
                    { name: 'Time ranges', value: "- Every Ghost get stopped from hunting for 90s \n- Demon get stopped for 60s \n- Spirit will be stopped for 180s (3 minutes) \n- Moroi wanders aimlessly depending on the used tier (/incence) +50%"}
                );
        } else if (subcommand === 'dirty-water-photo') {
            generalEmbed
                .setTitle('Dirty Water Photo')
                .setDescription('Once per interaction! A photo of dirty water in a sink that has been interacted with by the ghost. Taking a pic of the Sink will first count as Dirty Water, second Pic will be interaction when taken while EMF still show up.')
                .setImage('https://media.discordapp.net/attachments/939102825328283669/939569975939727440/unknown.png');
        };

        // response
        interaction.editReply({ embeds: [generalEmbed] });
    }
}