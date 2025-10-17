const { SlashCommandBuilder,  EmbedBuilder} = require('discord.js');

// import displays -----
const { dotsgen, dotsT1, dotsT2, dotsT3 } = require('../displays/items/dots.json');
const { emfgen, emfT1, emfT2, emfT3 } = require('../displays/items/emf.json');
const { bookgen, bookT1, bookT2, bookT3 } = require('../displays/items/book.json');
const { boxgen, boxT1, boxT2, boxT3 } = require('../displays/items/box.json');
const { boxquesgen } = require('../displays/items/boxques.json');
const { thermogen, thermoT1, thermoT2, thermoT3 } = require('../displays/items/thermometer.json');
const { uvgen, uvT1, uvT2, uvT3 } = require('../displays/items/uv.json');
const { videogen, videoT1, videoT2, videoT3 } = require('../displays/items/video.json');
const { tripodgen, tripodT1, tripodT2, tripodT3 } = require('../displays/items/tripod.json');
const { soundgen, soundT1, soundT2, soundT3 } = require('../displays/items/sound.json');
const { pillsgen, pillsT1, pillsT2,pillsT3 } = require('../displays/items/medication.json');
const { crucifixgen, crucifixT1, crucifixT2, crucifixT3 } = require('../displays/items/crucifix.json');
const { firelightgen, firelightT1, firelightT2, firelightT3 } = require('../displays/items/firelight.json');
const { flashlightgen, flashlightT1,flashlightT2, flashlightT3 } = require('../displays/items/flashlight.json');
const { headgen, headT1, headT2, headT3 } = require('../displays/items/head.json');
const { ignitergen, igniterT1, igniterT2, igniterT3 } = require('../displays/items/igniter.json');
const { incensegen, incenseT1, incenseT2, incenseT3 } = require('../displays/items/incense.json');
const { motiongen, motionT1, motionT2, motionT3 } = require('../displays/items/motion.json');
const { paramicgen, paramicT1, paramicT2, paramicT3 } = require('../displays/items/parabolic.json');
const { photogen, photoT1, photoT2, photoT3 } = require('../displays/items/photocam.json');
const { saltgen, saltT1, saltT2, saltT3 } = require('../displays/items/salt.json');
const { soundrecgen, soundrecT1, soundrecT2, soundrecT3 } = require('../displays/items/soundrec.json');

// command
module.exports = {
    data: new SlashCommandBuilder()
    .setName('equipment')
    .setDescription('Get information about any equipment in Phasmophobia!')

    //dots
    .addSubcommand(subcommand =>
        subcommand
        .setName('dots')
        .setDescription('Shows information about the D.O.T.S projector.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'dotsT1' },
                { name: 'Tier 2', value: 'dotsT2' },
                { name: 'Tier 3', value: 'dotsT3' },
            )
        )
    )


    //emf
    .addSubcommand(subcommand =>
        subcommand
        .setName('emf-reader')
        .setDescription('Shows information about the EMF reader.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'emfT1' },
                { name: 'Tier 2', value: 'emfT2' },
                { name: 'Tier 3', value: 'emfT3' },
            )
        )
    )

    //soundrecorder
    .addSubcommand(subcommand =>
        subcommand
        .setName('sound-recorder')
        .setDescription('Shows information about the soundrecorder.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'soundrecT1' },
                { name: 'Tier 2', value: 'soundrecT2' },
                { name: 'Tier 3', value: 'soundrecT3' },
            )
        )
    )

    //writing book
    .addSubcommand(subcommand =>
        subcommand
        .setName('writing-book')
        .setDescription('Shows information about the Ghost writing book.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'bookT1' },
                { name: 'Tier 2', value: 'bookT2' },
                { name: 'Tier 3', value: 'bookT3' },
            )
        )
    )

    //spirit box
    .addSubcommand(subcommand =>
        subcommand
        .setName('spirit-box')
        .setDescription('Shows information about the Spirit box.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'boxT1' },
                { name: 'Tier 2', value: 'boxT2' },
                { name: 'Tier 3', value: 'boxT3' },
            )
        )
    )

    //spirit box questions
    .addSubcommand(subcommand =>
        subcommand
        .setName('spiritbox-questions')
        .setDescription('Shows questions you can ask on the Spirit box.')
    )

    //thermo
    .addSubcommand(subcommand =>
        subcommand
        .setName('thermometer')
        .setDescription('Shows information about the Thermometer.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'thermoT1' },
                { name: 'Tier 2', value: 'thermoT2' },
                { name: 'Tier 3', value: 'thermoT3' },
            )
        )
    )

    //uv
    .addSubcommand(subcommand =>
        subcommand
        .setName('uv-light')
        .setDescription('Shows information about the UV light.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'uvT1' },
                { name: 'Tier 2', value: 'uvT2' },
                { name: 'Tier 3', value: 'uvT3' },
            )
        )
    )

    //video cam
    .addSubcommand(subcommand =>
        subcommand
        .setName('video-camera')
        .setDescription('Shows information about the Video camera.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'videoT1' },
                { name: 'Tier 2', value: 'videoT2' },
                { name: 'Tier 3', value: 'videoT3' },
            )
        )
    )

    //tripod
    .addSubcommand(subcommand =>
        subcommand
        .setName('tripod')
        .setDescription('Shows information about the Tripod.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'tripodT1' },
                { name: 'Tier 2', value: 'tripodT2' },
                { name: 'Tier 3', value: 'tripodT3' },
            )
        )
    )

    //soundsensor
    .addSubcommand(subcommand =>
        subcommand
        .setName('sound')
        .setDescription('Shows information about the Sound sensor.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'soundT1' },
                { name: 'Tier 2', value: 'soundT2' },
                { name: 'Tier 3', value: 'soundT3' },
            )
        )
    )

    //sanity medication
    .addSubcommand(subcommand =>
        subcommand
        .setName('medication')
        .setDescription('Shows information about the Sanity medication.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'pillsT1' },
                { name: 'Tier 2', value: 'pillsT2' },
                { name: 'Tier 3', value: 'pillsT3' },
            )
        )
    )

    //cruci
    .addSubcommand(subcommand =>
        subcommand
        .setName('crucifix')
        .setDescription('Shows information about the Crucifix.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'crucifixT1' },
                { name: 'Tier 2', value: 'crucifixT2' },
                { name: 'Tier 3', value: 'crucifixT3' },
            )
        )
    )

    //firelight
    .addSubcommand(subcommand =>
        subcommand
        .setName('firelight')
        .setDescription('Shows information about the Firelight.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'firelightT1' },
                { name: 'Tier 2', value: 'firelightT2' },
                { name: 'Tier 3', value: 'firelightT3' },
            )
        )
    )

    //flashlight
    .addSubcommand(subcommand =>
        subcommand
        .setName('flashlight')
        .setDescription('Shows information about the Flashlight.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'flashlightT1' },
                { name: 'Tier 2', value: 'flashlightT2' },
                { name: 'Tier 3', value: 'flashlightT3' },
            )
        )
    )

    //head gear
    .addSubcommand(subcommand =>
        subcommand
        .setName('head-gear')
        .setDescription('Shows information about the Head gear.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'headT1' },
                { name: 'Tier 2', value: 'headT2' },
                { name: 'Tier 3', value: 'headT3' },
            )
        )
    )

    //igniter
    .addSubcommand(subcommand =>
        subcommand
        .setName('igniter')
        .setDescription('Shows information about the Igniter.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'igniterT1' },
                { name: 'Tier 2', value: 'igniterT2' },
                { name: 'Tier 3', value: 'igniterT3' },
            )
        )
    )

    //incense
    .addSubcommand(subcommand =>
        subcommand
        .setName('incense')
        .setDescription('Shows information about the Incense.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'incenseT1' },
                { name: 'Tier 2', value: 'incenseT2' },
                { name: 'Tier 3', value: 'incenseT3' },
            )
        )
    )

    //motion sensor
    .addSubcommand(subcommand =>
        subcommand
        .setName('motion-sensor')
        .setDescription('Shows information about the Motion sensor.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'motionT1' },
                { name: 'Tier 2', value: 'motionT2' },
                { name: 'Tier 3', value: 'motionT3' },
            )
        )
    )

    //paramic
    .addSubcommand(subcommand =>
        subcommand
        .setName('parabolic')
        .setDescription('Shows information about the Parabolic microphone.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'paramicT1' },
                { name: 'Tier 2', value: 'paramicT2' },
                { name: 'Tier 3', value: 'paramicT3' },
            )
        )
    )

    //photocam
    .addSubcommand(subcommand =>
        subcommand
        .setName('photo-camera')
        .setDescription('Shows information about the Photo camera.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'photoT1' },
                { name: 'Tier 2', value: 'photoT2' },
                { name: 'Tier 3', value: 'photoT3' },
            )
        )
    )

    //salt
    .addSubcommand(subcommand =>
        subcommand
        .setName('salt')
        .setDescription('Shows information about Salt.')
        .addStringOption(option =>
            option
            .setName('display')
            .setDescription('The info to display')
            .addChoices(
                { name: 'Tier 1', value: 'saltT1' },
                { name: 'Tier 2', value: 'saltT2' },
                { name: 'Tier 3', value: 'saltT3' },
            )
        )
    ),

    // EXECUTE COMMAND -------
    async execute(interaction) {
        await interaction.deferReply();
        // all embeds have these fields:
        const ghostEmbed = new EmbedBuilder()
            .setColor('#00FF00')
            .setFooter({
                text: 'Booo!',
            });

        // GET SUBCOMMAND -------
        if (interaction.options.getSubcommand() === 'dots') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'D.O.T.S projector';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: dotsgen },
                    { name: '**Tier 1:**', value: dotsT1 },
                    { name: '**Tier 2:**', value: dotsT2 },
                    { name: '**Tier 3:**', value: dotsT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'dotsT1':
                        title = '**Tier 1:**';
                        displayValue = dotsT1;
                        descriptionValue = 'dotsT1';
                        break;
                    case 'dotsT2':
                        title = '**Tier 2:**';
                        displayValue = dotsT2;
                        descriptionValue = 'dotsT2';
                        break;
                    case 'dotsT3':
                        title = '**Tier 3:**';
                        displayValue = dotsT3;
                        descriptionValue = 'dotsT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: dotsgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'emf-reader') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'EMF reader';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: emfgen },
                    { name: '**Tier 1:**', value: emfT1 },
                    { name: '**Tier 2:**', value: emfT2 },
                    { name: '**Tier 3:**', value: emfT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'emfT1':
                        title = '**Tier 1:**';
                        displayValue = emfT1;
                        descriptionValue = 'emfT1';
                        break;
                    case 'emfT2':
                        title = '**Tier 2:**';
                        displayValue = emfT2;
                        descriptionValue = 'emfT2';
                        break;
                    case 'emfT3':
                        title = '**Tier 3:**';
                        displayValue = emfT3;
                        descriptionValue = 'emfT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: emfgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

            // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'sound-recorder') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Soundrecorder';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: soundrecgen },
                    { name: '**Tier 1:**', value: soundrecT1 },
                    { name: '**Tier 2:**', value: soundrecT2 },
                    { name: '**Tier 3:**', value: soundrecT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'soundrecT1':
                        title = '**Tier 1:**';
                        displayValue = soundrecT1;
                        descriptionValue = 'soundrecT1';
                        break;
                    case 'soundrecT2':
                        title = '**Tier 2:**';
                        displayValue = soundrecT2;
                        descriptionValue = 'soundrecT2';
                        break;
                    case 'soundrecT3':
                        title = '**Tier 3:**';
                        displayValue = soundrecT3;
                        descriptionValue = 'soundrecT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: soundrecgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'writing-book') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Ghost writing book';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: bookgen },
                    { name: '**Tier 1:**', value: bookT1 },
                    { name: '**Tier 2:**', value: bookT2 },
                    { name: '**Tier 3:**', value: bookT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'bookT1':
                        title = '**Tier 1:**';
                        displayValue = bookT1;
                        descriptionValue = 'bookT1';
                        break;
                    case 'bookT2':
                        title = '**Tier 2:**';
                        displayValue = bookT2;
                        descriptionValue = 'bookT2';
                        break;
                    case 'bookT3':
                        title = '**Tier 3:**';
                        displayValue = bookT3;
                        descriptionValue = 'bookT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: bookgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'spirit-box') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Spirit Box';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: boxgen },
                    { name: '**Tier 1:**', value: boxT1 },
                    { name: '**Tier 2:**', value: boxT2 },
                    { name: '**Tier 3:**', value: boxT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'boxT1':
                        title = '**Tier 1:**';
                        displayValue = boxT1;
                        descriptionValue = 'boxT1';
                        break;
                    case 'boxT2':
                        title = '**Tier 2:**';
                        displayValue = boxT2;
                        descriptionValue = 'boxT2#';
                        break;
                    case 'boxT3':
                        title = '**Tier 3:**';
                        displayValue = boxT3;
                        descriptionValue = 'boxT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: boxgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'spiritbox-questions') {
            const equipmentName = 'Spiritbox questions';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // update embed
                ghostEmbed
                .setDescription(`All ${equipmentName}!`)
                .addFields(
                    { name: '**Questions you can ask on the spiritbox:**', value: boxgen }
                )
                .setDescription(`Check the ${equipmentName}!`)

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });    

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'thermometer') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Thermometer';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: thermogen },
                    { name: '**Tier 1:**', value: thermoT1 },
                    { name: '**Tier 2:**', value: thermoT2 },
                    { name: '**Tier 3:**', value: thermoT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                
                switch(option) {
                    case 'thermoT1':
                        title = '**Tier 1:**';
                        displayValue = thermoT2;
                        descriptionValue = 'thermoT3';
                        break;
                    case 'thermoT2':
                        title = '**Tier 2:**';
                        displayValue = thermoT2;
                        descriptionValue = 'thermoT2';
                        break;
                    case 'thermoT3':
                        title = '**Tier 3:**';
                        displayValue = thermoT3;
                        descriptionValue = 'thermoT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: thermogen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'uv-light') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'UV light';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: uvgen },
                    { name: '**Tier 1:**', value: uvT1 },
                    { name: '**Tier 2:**', value: uvT2 },
                    { name: '**Tier 3:**', value: uvT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                
                switch(option) {
                    case 'uvT1':
                        title = '**Tier 1:**';
                        displayValue = uvT1;
                        descriptionValue = 'uvT1';
                        break;
                    case 'uvT2':
                        title = '**Tier 2:**';
                        displayValue = uvT2;
                        descriptionValue = 'uvT2';
                        break;
                    case 'uvT3':
                        title = '**Tier 3:**';
                        displayValue = uvT3;
                        descriptionValue = 'uvT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: uvgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'video-camera') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Video camera';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: videogen },
                    { name: '**Tier 1:**', value: videoT1 },
                    { name: '**Tier 2:**', value: videoT2 },
                    { name: '**Tier 3:**', value: videoT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'videoT1':
                        title = '**Tier 1:**';
                        displayValue = videoT1;
                        descriptionValue = 'videoT1';
                        break;
                    case 'videoT2':
                        title = '**Tier 2:**';
                        displayValue = videoT2;
                        descriptionValue = 'videoT2';
                        break;
                    case 'videoT3':
                        title = '**Tier 3:**';
                        displayValue = videoT3;
                        descriptionValue = 'videoT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: videogen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'tripod') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Tripod';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: tripodgen },
                    { name: '**Tier 1:**', value: tripodT1 },
                    { name: '**Tier 2:**', value: tripodT2 },
                    { name: '**Tier 3:**', value: tripodT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'tripodT1':
                        title = '**Tier 1:**';
                        displayValue = tripodT1;
                        descriptionValue = 'tripodT1';
                        break;
                    case 'tripodT2':
                        title = '**Tier 2:**';
                        displayValue = tripodT2;
                        descriptionValue = 'tripodT2';
                        break;
                    case 'tripodT3':
                        title = '**Tier 3:**';
                        displayValue = tripodT3;
                        descriptionValue = 'tripodT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: tripodgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'sound') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Sound sensor';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: soundgen },
                    { name: '**Tier 1:**', value: soundT1 },
                    { name: '**Tier 2:**', value: soundT2 },
                    { name: '**Tier 3:**', value: soundT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                switch(option) {
                    case 'soundT1':
                        title = '**Tier 1:**';
                        displayValue = soundT1;
                        descriptionValue = 'soundT1';
                        break;
                    case 'soundT2':
                        title = '**Tier 2:**';
                        displayValue = soundT2;
                        descriptionValue = 'soundT2';
                        break;
                    case 'soundT3':
                        title = '**Tier 3:**';
                        displayValue = soundT3;
                        descriptionValue = 'soundT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: soundgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'medication') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Sanity medication';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: pillsgen },
                    { name: '**Tier 1:**', value: pillsT1 },
                    { name: '**Tier 2:**', value: pillsT2 },
                    { name: '**Tier 3:**', value: pillsT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'pillsT1':
                        title = '**Tier 1:**';
                        displayValue = pillsT1;
                        descriptionValue = 'pillsT1';
                        break;
                    case 'pillsT2':
                        title = '**Tier 2:**';
                        displayValue = pillsT2;
                        descriptionValue = 'pillsT2';
                        break;
                    case 'pillsT3':
                        title = '**Tier 3:**';
                        displayValue = pillsT3;
                        descriptionValue = 'pillsT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: pillsgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'crucifix') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Crucifix';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: crucifixgen },
                    { name: '**Tier 1:**', value: crucifixT1 },
                    { name: '**Tier 2:**', value: crucifixT2 },
                    { name: '**Tier 3:**', value: crucifixT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                
                switch(option) {
                    case 'crucifixT1':
                        title = '**Tier 1:**';
                        displayValue = crucifixT1;
                        descriptionValue = 'crucifixT1';
                        break;
                    case 'crucifixT2':
                        title = '**Tier 2:**';
                        displayValue = crucifixT2;
                        descriptionValue = 'crucifixT2';
                        break;
                    case 'crucifixT3':
                        title = '**Tier 3:**';
                        displayValue = crucifixT3;
                        descriptionValue = 'crucifixT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: crucifixgen},
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'firelight') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Firelight';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: firelightgen },
                    { name: '**Tier 1:**', value: firelightT1 },
                    { name: '**Tier 2:**', value: firelightT2 },
                    { name: '**Tier 3:**', value: firelightT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'firelightT1':
                        title = '**Tier 1:**';
                        displayValue = firelightT1;
                        descriptionValue = 'firelightT1';
                        break;
                    case 'firelightT2':
                        title = '**Tier 2:**';
                        displayValue = firelightT2;
                        descriptionValue = 'firelightT2';
                        break;
                    case 'firelightT3':
                        title = '**Tier 3:**';
                        displayValue = firelightT3;
                        descriptionValue = 'firelightT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: firelightgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'flashlight') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Flashlight';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: flashlightgen },
                    { name: '**Tier 1:**', value: flashlightT1 },
                    { name: '**Tier 2:**', value: flashlightT2 },
                    { name: '**Tier 3:**', value: flashlightT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'flashlightT1':
                        title = '**Tier 1:**';
                        displayValue = flashlightT1;
                        descriptionValue = 'flashlightT1';
                        break;
                    case 'flashlightT2':
                        title = '**Tier 2:**';
                        displayValue = flashlightT2;
                        descriptionValue = 'flashlightT2';
                        break;
                    case 'flashlightT3':
                        title = '**Tier 3:**';
                        displayValue = flashlightT3;
                        descriptionValue = 'flashlightT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: flashlightgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'head-gear') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Head gear';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: headgen },
                    { name: '**Tier 1:**', value: headT1 },
                    { name: '**Tier 2:**', value: headT2 },
                    { name: '**Tier 3:**', value: headT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'headT1':
                        title = '**Tier 1:**';
                        displayValue = headT1;
                        descriptionValue = 'headT1';
                        break;
                    case 'headT2':
                        title = '**Tier 2:**';
                        displayValue = headT2;
                        descriptionValue = 'headT2';
                        break;
                    case 'headT3':
                        title = '**Tier 3:**';
                        displayValue = headT3;
                        descriptionValue = 'headT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: headgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'igniter') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Igniter';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: ignitergen },
                    { name: '**Tier 1:**', value: igniterT1 },
                    { name: '**Tier 2:**', value: igniterT2 },
                    { name: '**Tier 3:**', value: igniterT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'igniterT1':
                        title = '**Tier 1:**';
                        displayValue = igniterT1;
                        descriptionValue = 'igniterT1';
                        break;
                    case 'igniterT2':
                        title = '**Tier 2:**';
                        displayValue = igniterT2;
                        descriptionValue = 'igniterT2';
                        break;
                    case 'igniterT3':
                        title = '**Tier 3:**';
                        displayValue = igniterT3;
                        descriptionValue = 'igniterT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: ignitergen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'incense') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Incense';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: incensegen },
                    { name: '**Tier 1:**', value: incenseT1 },
                    { name: '**Tier 2:**', value: incenseT2 },
                    { name: '**Tier 3:**', value: incenseT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'incenseT1':
                        title = '**Tier 1:**';
                        displayValue = incenseT1;
                        descriptionValue = 'incenseT1';
                        break;
                    case 'incenseT2':
                        title = '**Tier 2:**';
                        displayValue = incenseT2;
                        descriptionValue = 'incenseT2';
                        break;
                    case 'incenseT3':
                        title = '**Tier 3:**';
                        displayValue = incenseT3;
                        descriptionValue = 'incenseT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: incensegen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'motion-sensor') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Motion sensor';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: motiongen },
                    { name: '**Tier 1:**', value: motionT1 },
                    { name: '**Tier 2:**', value: motionT2 },
                    { name: '**Tier 3:**', value: motionT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                
                switch(option) {
                    case 'motionT1':
                        title = '**Tier 1:**';
                        displayValue = motionT1;
                        descriptionValue = 'motionT1';
                        break;
                    case 'motionT2':
                        title = '**Tier 2:**';
                        displayValue = motionT2;
                        descriptionValue = 'motionT2';
                        break;
                    case 'motionT3':
                        title = '**Tier 3:**';
                        displayValue = motionT3;
                        descriptionValue = 'motionT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: motiongen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'parabolic') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Parabolic microphone';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: paramicgen },
                    { name: '**Tier 1:**', value: paramicT1 },
                    { name: '**Tier 2:**', value: paramicT2 },
                    { name: '**Tier 3:**', value: paramicT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;
                
                switch(option) {
                    case 'paramicT1':
                        title = '**Tier 1:**';
                        displayValue = paramicT1;
                        descriptionValue = 'paramicT1';
                        break;
                    case 'paramicT2':
                        title = '**Tier 2:**';
                        displayValue = paramicT2;
                        descriptionValue = 'paramicT2';
                        break;
                    case 'paramicT3':
                        title = '**Tier 3:**';
                        displayValue = paramicT3;
                        descriptionValue = 'paramicT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: paramicgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'photo-camera') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Photo camera';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: photogen },
                    { name: '**Tier 1:**', value: photoT1 },
                    { name: '**Tier 2:**', value: photoT2 },
                    { name: '**Tier 3:**', value: photoT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'photoT1':
                        title = '**Tier 1:**';
                        displayValue = photoT1;
                        descriptionValue = 'photoT1';
                        break;
                    case 'photoT2':
                        title = '**Tier 2:**';
                        displayValue = photoT2;
                        descriptionValue = 'photoT2';
                        break;
                    case 'photoT3':
                        title = '**Tier 3:**';
                        displayValue = photoT3;
                        descriptionValue = 'photoT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: photogen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }
            
            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });

        // NEXT ----------------------------------------------------------
        } else if (interaction.options.getSubcommand() === 'salt') {
            const option = interaction.options.getString('display') ?? 'all';
            const equipmentName = 'Salt';

            // set embed title
            ghostEmbed.setTitle(equipmentName);

            // if everything should be displayed
            if (option === 'all') {
                // update embed
                ghostEmbed
                .setDescription(`All information about ${equipmentName}!`)
                .addFields(
                    { name: '**General:**', value: saltgen },
                    { name: '**Tier 1:**', value: saltT1 },
                    { name: '**Tier 2:**', value: saltT2 },
                    { name: '**Tier 3:**', value: saltT3 }
                )
            } else {
                // if specifics are displayed, change values to reply with
                let title;
                let displayValue;
                let descriptionValue;

                switch(option) {
                    case 'saltT1':
                        title = '**Tier 1:**';
                        displayValue = saltT1;
                        descriptionValue = 'saltT1';
                        break;
                    case 'saltT2':
                        title = '**Tier 2:**';
                        displayValue = saltT2;
                        descriptionValue = 'saltT2';
                        break;
                    case 'saltT3':
                        title = '**Tier 3:**';
                        displayValue = saltT3;
                        descriptionValue = 'saltT3';
                        break;
                }

                // update the embed
                ghostEmbed
                .addFields(
                    { name: '**General:**', value: saltgen },
                    { name: title, value: displayValue }
                )
                .setDescription(`Check the ${equipmentName} ${descriptionValue}!`)
            }

            // reply with embed
            await interaction.editReply({ embeds: [ghostEmbed] });
        }
    }
};