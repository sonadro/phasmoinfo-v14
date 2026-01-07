const { SlashCommandBuilder,  EmbedBuilder} = require('discord.js');

// import displays -----
const { banEvi, banTra, banAbi } = require('../displays/ghosts/banshee.json');
const { demEvi, demTra, demAbi } = require('../displays/ghosts/demon.json');
const { deoEvi, deoTra, deoAbi } = require('../displays/ghosts/deogen.json');
const { gorEvi, gorTra, gorAbi } = require('../displays/ghosts/goryo.json');
const { hanEvi, hanTra, hanAbi } = require('../displays/ghosts/hantu.json');
const { jinEvi, jinTra, jinAbi } = require('../displays/ghosts/jinn.json');
const { marEvi, marTra, marAbi } = require('../displays/ghosts/mare.json');
const { mimEvi, mimTra, mimAbi } = require('../displays/ghosts/mimic.json');
const { morEvi, morTra, morAbi } = require('../displays/ghosts/moroi.json');
const { mylEvi, mylTra, mylAbi } = require('../displays/ghosts/myling.json');
const { obaEvi, obaTra, obaAbi } = require('../displays/ghosts/obake.json');
const { oniEvi, oniTra, oniAbi } = require('../displays/ghosts/oni.json');
const { onrEvi, onrTra, onrAbi } = require('../displays/ghosts/onryo.json');
const { phaEvi, phaTra, phaAbi } = require('../displays/ghosts/phantom.json');
const { polEvi, polTra, polAbi } = require('../displays/ghosts/poltergeist.json');
const { raiEvi, raiTra, raiAbi } = require('../displays/ghosts/raiju.json');
const { revEvi, revTra, revAbi } = require('../displays/ghosts/revenant.json');
const { shaEvi, shaTra, shaAbi } = require('../displays/ghosts/shade.json');
const { spiEvi, spiTra, spiAbi } = require('../displays/ghosts/spirit.json');
const { thaEvi, thaTra, thaAbi } = require('../displays/ghosts/thaye.json');
const { twiEvi, twiTra, twiAbi } = require('../displays/ghosts/twins.json');
const { wraEvi, wraTra, wraAbi } = require('../displays/ghosts/wraith.json');
const { yokEvi, yokTra, yokAbi } = require('../displays/ghosts/yokai.json');
const { yurEvi, yurTra, yurAbi } = require('../displays/ghosts/yurei.json');
const { dayEvi, dayTra, dayAbi } = require('../displays/ghosts/dayan.json');
const { galEvi, galTra, galAbi } = require('../displays/ghosts/gallu.json');
const { obamEvi, obamTra, obamAbi } = require('../displays/ghosts/obambo.json');

// command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ghost')
        .setDescription('Get information about any ghost in Phasmophobia!')

        // banshee
        .addSubcommand(subcommand =>
            subcommand
                .setName('banshee')
                .setDescription('Shows information about the Banshee.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'banEvi' },
                            { name: 'Traits', value: 'banTra' },
                            { name: 'Hidden Abilities', value: 'banAbi' },
                        )
                    )
                )

        // demon
        .addSubcommand(subcommand =>
            subcommand
                .setName('demon')
                .setDescription('Shows information about the Demon.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'demEvi' },
                            { name: 'Traits', value: 'demTra' },
                            { name: 'Hidden Abilities', value: 'demAbi' },
                        )
                    )
                )
        
        // dayan
        .addSubcommand(subcommand =>
            subcommand
                .setName('dayan')
                .setDescription('Shows information about the Dayan.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'dayEvi' },
                            { name: 'Traits', value: 'dayTra' },
                            { name: 'Hidden Abilities', value: 'dayAbi' },
                        )
                    )
                )        

        // gallu
        .addSubcommand(subcommand =>
            subcommand
                .setName('gallu')
                .setDescription('Shows information about the Gallu.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'galEvi' },
                            { name: 'Traits', value: 'galTra' },
                            { name: 'Hidden Abilities', value: 'galAbi' },
                        )
                    )
                )

        // obambo
        .addSubcommand(subcommand =>
            subcommand
                .setName('obambo')
                .setDescription('Shows information about the Obambo.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'obamEvi' },
                            { name: 'Traits', value: 'obamTra' },
                            { name: 'Hidden Abilities', value: 'obamAbi' },
                        )
                    )
                )        

        // deogen
        .addSubcommand(subcommand =>
            subcommand
                .setName('deogen')
                .setDescription('Shows information about the Deogen.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'deoEvi' },
                            { name: 'Traits', value: 'deoTra' },
                            { name: 'Hidden Abilities', value: 'deoAbi' },
                        )
                    )
                )

        // goryo
        .addSubcommand(subcommand =>
            subcommand
                .setName('goryo')
                .setDescription('Shows information about the Goryo.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'gorEvi' },
                            { name: 'Traits', value: 'gorTra' },
                            { name: 'Hidden Abilities', value: 'gorAbi' },
                        )
                    )
                )

        // hantu
        .addSubcommand(subcommand =>
            subcommand
                .setName('hantu')
                .setDescription('Shows information about the Hantu.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'hanEvi' },
                            { name: 'Traits', value: 'hanTra' },
                            { name: 'Hidden Abilities', value: 'hanAbi' },
                        )
                    )
                )

        // jinn
        .addSubcommand(subcommand =>
            subcommand
                .setName('jinn')
                .setDescription('Shows information about the Jinn.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'jinEvi' },
                            { name: 'Traits', value: 'jinTra' },
                            { name: 'Hidden Abilities', value: 'jinAbi' },
                        )
                    )
                )

        // mare
        .addSubcommand(subcommand =>
            subcommand
                .setName('mare')
                .setDescription('Shows information about the Mare.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'marEvi' },
                            { name: 'Traits', value: 'marTra' },
                            { name: 'Hidden Abilities', value: 'marAbi' },
                        )
                    )
                )

        // mimic
        .addSubcommand(subcommand =>
            subcommand
                .setName('mimic')
                .setDescription('Shows information about the Mimic.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'mimEvi' },
                            { name: 'Traits', value: 'mimTra' },
                            { name: 'Hidden Abilities', value: 'mimAbi' },
                        )
                    )
                )

        // moroi
        .addSubcommand(subcommand =>
            subcommand
                .setName('moroi')
                .setDescription('Shows information about the Moroi.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'morEvi' },
                            { name: 'Traits', value: 'morTra' },
                            { name: 'Hidden Abilities', value: 'morAbi' },
                        )
                    )
                )

        // myling
        .addSubcommand(subcommand =>
            subcommand
                .setName('myling')
                .setDescription('Shows information about the Myling.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'mylEvi' },
                            { name: 'Traits', value: 'mylTra' },
                            { name: 'Hidden Abilities', value: 'mylAbi' },
                        )
                    )
                )

        // obake
        .addSubcommand(subcommand =>
            subcommand
                .setName('obake')
                .setDescription('Shows information about the Obake.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'obaEvi' },
                            { name: 'Traits', value: 'obaTra' },
                            { name: 'Hidden Abilities', value: 'obaAbi' },
                        )
                    )
                )

        // oni
        .addSubcommand(subcommand =>
            subcommand
                .setName('oni')
                .setDescription('Shows information about the Oni.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'oniEvi' },
                            { name: 'Traits', value: 'oniTra' },
                            { name: 'Hidden Abilities', value: 'oniAbi' },
                        )
                    )
                )

        // onryo
        .addSubcommand(subcommand =>
            subcommand
                .setName('onryo')
                .setDescription('Shows information about the Onryo.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'onrEvi' },
                            { name: 'Traits', value: 'onrTra' },
                            { name: 'Hidden Abilities', value: 'onrAbi' },
                        )
                    )
                )

        // phantom
        .addSubcommand(subcommand =>
            subcommand
                .setName('phantom')
                .setDescription('Shows information about the Phantom.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'phaEvi' },
                            { name: 'Traits', value: 'phaTra' },
                            { name: 'Hidden Abilities', value: 'phaAbi' },
                        )
                    )
                )

        // poltergeist
        .addSubcommand(subcommand =>
            subcommand
                .setName('poltergeist')
                .setDescription('Shows information about the Poltergeist.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'polEvi' },
                            { name: 'Traits', value: 'polTra' },
                            { name: 'Hidden Abilities', value: 'polAbi' },
                        )
                    )
                )

        // raiju
        .addSubcommand(subcommand =>
            subcommand
                .setName('raiju')
                .setDescription('Shows information about the Raiju.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'raiEvi' },
                            { name: 'Traits', value: 'raiTra' },
                            { name: 'Hidden Abilities', value: 'raiAbi' },
                        )
                    )
                )

        // revenant
        .addSubcommand(subcommand =>
            subcommand
                .setName('revenant')
                .setDescription('Shows information about the Revenant.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'revEvi' },
                            { name: 'Traits', value: 'revTra' },
                            { name: 'Hidden Abilities', value: 'revAbi' },
                        )
                    )
                )

        // shade
        .addSubcommand(subcommand =>
            subcommand
                .setName('shade')
                .setDescription('Shows information about the Shade.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'shaEvi' },
                            { name: 'Traits', value: 'shaTra' },
                            { name: 'Hidden Abilities', value: 'shaAbi' },
                        )
                    )
                )

        // spirit
        .addSubcommand(subcommand =>
            subcommand
                .setName('spirit')
                .setDescription('Shows information about the Spirit.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'spiEvi' },
                            { name: 'Traits', value: 'spiTra' },
                            { name: 'Hidden Abilities', value: 'spiAbi' },
                        )
                    )
                )

        // thaye
        .addSubcommand(subcommand =>
            subcommand
                .setName('thaye')
                .setDescription('Shows information about the Thaye.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'thaEvi' },
                            { name: 'Traits', value: 'thaTra' },
                            { name: 'Hidden Abilities', value: 'thaAbi' },
                        )
                    )
                )

        // twins
        .addSubcommand(subcommand =>
            subcommand
                .setName('twins')
                .setDescription('Shows information about the Twins.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'twiEvi' },
                            { name: 'Traits', value: 'twiTra' },
                            { name: 'Hidden Abilities', value: 'twiAbi' },
                        )
                    )
                )

        // wraith
        .addSubcommand(subcommand =>
            subcommand
                .setName('wraith')
                .setDescription('Shows information about the Wraith.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'wraEvi' },
                            { name: 'Traits', value: 'wraTra' },
                            { name: 'Hidden Abilities', value: 'wraAbi' },
                        )
                    )
                )

        // yokai
        .addSubcommand(subcommand =>
            subcommand
                .setName('yokai')
                .setDescription('Shows information about the Yokai.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'yokEvi' },
                            { name: 'Traits', value: 'yokTra' },
                            { name: 'Hidden Abilities', value: 'yokAbi' },
                        )
                    )
                )

        // yurei
        .addSubcommand(subcommand =>
            subcommand
                .setName('yurei')
                .setDescription('Shows information about the Yurei.')
                .addStringOption(option =>
                    option
                        .setName('display')
                        .setDescription('The info to display')
                        .addChoices(
                            { name: 'Evidence', value: 'yurEvi' },
                            { name: 'Traits', value: 'yurTra' },
                            { name: 'Hidden Abilities', value: 'yurAbi' },
                        )
                    )
                ),


        // EXECUTE COMMAND -------
        async execute(interaction) {
          await interaction.deferReply();
            // all embeds have these fields:
            const ghostEmbed = new EmbedBuilder()
                .setColor('#52FFFA')
                .setFooter({
                    text: 'Booo!',
                })

            // GET SUBCOMMAND -------
            if (interaction.options.getSubcommand() === 'banshee') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Banshee';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: banEvi },
                            { name: '**Traits:**', value: banTra },
                            { name: '**Hidden abilities:**', value: banAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'banEvi':
                            title = '**Evidence:**';
                            displayValue = banEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'banTra':
                            title = '**Traits:**';
                            displayValue = banTra;
                            descriptionValue = 'traits';
                            break;
                        case 'banAbi':
                            title = '**Hidden abilities:**';
                            displayValue = banAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'demon') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Demon';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: demEvi },
                            { name: '**Traits:**', value: demTra },
                            { name: '**Hidden abilities:**', value: demAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'demEvi':
                            title = '**Evidence:**';
                            displayValue = demEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'demTra':
                            title = '**Traits:**';
                            displayValue = demTra;
                            descriptionValue = 'traits';
                            break;
                        case 'demAbi':
                            title = '**Hidden abilities:**';
                            displayValue = demAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'dayan') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Dayan';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: dayEvi },
                            { name: '**Traits:**', value: dayTra },
                            { name: '**Hidden abilities:**', value: dayAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'dayEvi':
                            title = '**Evidence:**';
                            displayValue = dayEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'dayTra':
                            title = '**Traits:**';
                            displayValue = dayTra;
                            descriptionValue = 'traits';
                            break;
                        case 'dayAbi':
                            title = '**Hidden abilities:**';
                            displayValue = dayAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'gallu') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Gallu';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: galEvi },
                            { name: '**Traits:**', value: galTra },
                            { name: '**Hidden abilities:**', value: galAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'galEvi':
                            title = '**Evidence:**';
                            displayValue = galEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'galTra':
                            title = '**Traits:**';
                            displayValue = galTra;
                            descriptionValue = 'traits';
                            break;
                        case 'galAbi':
                            title = '**Hidden abilities:**';
                            displayValue = galAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'obambo') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Obambo';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: obamEvi },
                            { name: '**Traits:**', value: obamTra },
                            { name: '**Hidden abilities:**', value: obamAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'obamEvi':
                            title = '**Evidence:**';
                            displayValue = obamEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'obamTra':
                            title = '**Traits:**';
                            displayValue = obamTra;
                            descriptionValue = 'traits';
                            break;
                        case 'obamAbi':
                            title = '**Hidden abilities:**';
                            displayValue = obamAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });


                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'deogen') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Deogen';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: deoEvi },
                            { name: '**Traits:**', value: deoTra },
                            { name: '**Hidden abilities:**', value: deoAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'deoEvi':
                            title = '**Evidence:**';
                            displayValue = deoEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'deoTra':
                            title = '**Traits:**';
                            displayValue = deoTra;
                            descriptionValue = 'traits';
                            break;
                        case 'deoAbi':
                            title = '**Hidden abilities:**';
                            displayValue = deoAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'goryo') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Goryo';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: gorEvi },
                            { name: '**Traits:**', value: gorTra },
                            { name: '**Hidden abilities:**', value: gorAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'gorEvi':
                            title = '**Evidence:**';
                            displayValue = gorEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'gorTra':
                            title = '**Traits:**';
                            displayValue = gorTra;
                            descriptionValue = 'traits';
                            break;
                        case 'gorAbi':
                            title = '**Hidden abilities:**';
                            displayValue = gorAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'hantu') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Hantu';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: hanEvi },
                            { name: '**Traits:**', value: hanTra },
                            { name: '**Hidden abilities:**', value: hanAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'hanEvi':
                            title = '**Evidence:**';
                            displayValue = hanEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'hanTra':
                            title = '**Traits:**';
                            displayValue = hanTra;
                            descriptionValue = 'traits';
                            break;
                        case 'hanAbi':
                            title = '**Hidden abilities:**';
                            displayValue = hanAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'jinn') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Jinn';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: jinEvi },
                            { name: '**Traits:**', value: jinTra },
                            { name: '**Hidden abilities:**', value: jinAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'jinEvi':
                            title = '**Evidence:**';
                            displayValue = jinEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'jinTra':
                            title = '**Traits:**';
                            displayValue = jinTra;
                            descriptionValue = 'traits';
                            break;
                        case 'jinAbi':
                            title = '**Hidden abilities:**';
                            displayValue = jinAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'mare') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Mare';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: marEvi },
                            { name: '**Traits:**', value: marTra },
                            { name: '**Hidden abilities:**', value: marAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'marEvi':
                            title = '**Evidence:**';
                            displayValue = marEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'marTra':
                            title = '**Traits:**';
                            displayValue = marTra;
                            descriptionValue = 'traits';
                            break;
                        case 'marAbi':
                            title = '**Hidden abilities:**';
                            displayValue = marAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'mimic') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Mimic';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: mimEvi },
                            { name: '**Traits:**', value: mimTra },
                            { name: '**Hidden abilities:**', value: mimAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'mimEvi':
                            title = '**Evidence:**';
                            displayValue = mimEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'mimTra':
                            title = '**Traits:**';
                            displayValue = mimTra;
                            descriptionValue = 'traits';
                            break;
                        case 'mimAbi':
                            title = '**Hidden abilities:**';
                            displayValue = mimAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'moroi') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Moroi';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: morEvi },
                            { name: '**Traits:**', value: morTra },
                            { name: '**Hidden abilities:**', value: morAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'morEvi':
                            title = '**Evidence:**';
                            displayValue = morEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'morTra':
                            title = '**Traits:**';
                            displayValue = morTra;
                            descriptionValue = 'traits';
                            break;
                        case 'morAbi':
                            title = '**Hidden abilities:**';
                            displayValue = morAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'myling') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Myling';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: mylEvi },
                            { name: '**Traits:**', value: mylTra },
                            { name: '**Hidden abilities:**', value: mylAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'mylEvi':
                            title = '**Evidence:**';
                            displayValue = mylEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'mylTra':
                            title = '**Traits:**';
                            displayValue = mylTra;
                            descriptionValue = 'traits';
                            break;
                        case 'mylAbi':
                            title = '**Hidden abilities:**';
                            displayValue = mylAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'obake') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Obake';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: obaEvi },
                            { name: '**Traits:**', value: obaTra },
                            { name: '**Hidden abilities:**', value: obaAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'obaEvi':
                            title = '**Evidence:**';
                            displayValue = obaEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'obaTra':
                            title = '**Traits:**';
                            displayValue = obaTra;
                            descriptionValue = 'traits';
                            break;
                        case 'obaAbi':
                            title = '**Hidden abilities:**';
                            displayValue = obaAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'oni') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Oni';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: oniEvi },
                            { name: '**Traits:**', value: oniTra },
                            { name: '**Hidden abilities:**', value: oniAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'oniEvi':
                            title = '**Evidence:**';
                            displayValue = oniEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'oniTra':
                            title = '**Traits:**';
                            displayValue = oniTra;
                            descriptionValue = 'traits';
                            break;
                        case 'oniAbi':
                            title = '**Hidden abilities:**';
                            displayValue = oniAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'onryo') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Onryo';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: onrEvi },
                            { name: '**Traits:**', value: onrTra },
                            { name: '**Hidden abilities:**', value: onrAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'onrEvi':
                            title = '**Evidence:**';
                            displayValue = onrEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'onrTra':
                            title = '**Traits:**';
                            displayValue = onrTra;
                            descriptionValue = 'traits';
                            break;
                        case 'onrAbi':
                            title = '**Hidden abilities:**';
                            displayValue = onrAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'phantom') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Phantom';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: phaEvi },
                            { name: '**Traits:**', value: phaTra },
                            { name: '**Hidden abilities:**', value: phaAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'phaEvi':
                            title = '**Evidence:**';
                            displayValue = phaEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'phaTra':
                            title = '**Traits:**';
                            displayValue = phaTra;
                            descriptionValue = 'traits';
                            break;
                        case 'phaAbi':
                            title = '**Hidden abilities:**';
                            displayValue = phaAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'poltergeist') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Poltergeist';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: polEvi },
                            { name: '**Traits:**', value: polTra },
                            { name: '**Hidden abilities:**', value: polAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'polEvi':
                            title = '**Evidence:**';
                            displayValue = polEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'polTra':
                            title = '**Traits:**';
                            displayValue = polTra;
                            descriptionValue = 'traits';
                            break;
                        case 'polAbi':
                            title = '**Hidden abilities:**';
                            displayValue = polAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'raiju') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Raiju';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: raiEvi },
                            { name: '**Traits:**', value: raiTra },
                            { name: '**Hidden abilities:**', value: raiAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'raiEvi':
                            title = '**Evidence:**';
                            displayValue = raiEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'raiTra':
                            title = '**Traits:**';
                            displayValue = raiTra;
                            descriptionValue = 'traits';
                            break;
                        case 'raiAbi':
                            title = '**Hidden abilities:**';
                            displayValue = raiAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'revenant') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Revenant';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: revEvi },
                            { name: '**Traits:**', value: revTra },
                            { name: '**Hidden abilities:**', value: revAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'revEvi':
                            title = '**Evidence:**';
                            displayValue = revEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'revTra':
                            title = '**Traits:**';
                            displayValue = revTra;
                            descriptionValue = 'traits';
                            break;
                        case 'revAbi':
                            title = '**Hidden abilities:**';
                            displayValue = revAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'shade') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Shade';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: shaEvi },
                            { name: '**Traits:**', value: shaTra },
                            { name: '**Hidden abilities:**', value: shaAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'shaEvi':
                            title = '**Evidence:**';
                            displayValue = shaEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'shaTra':
                            title = '**Traits:**';
                            displayValue = shaTra;
                            descriptionValue = 'traits';
                            break;
                        case 'shaAbi':
                            title = '**Hidden abilities:**';
                            displayValue = shaAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'spirit') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Spirit';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: spiEvi },
                            { name: '**Traits:**', value: spiTra },
                            { name: '**Hidden abilities:**', value: spiAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'spiEvi':
                            title = '**Evidence:**';
                            displayValue = spiEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'spiTra':
                            title = '**Traits:**';
                            displayValue = spiTra;
                            descriptionValue = 'traits';
                            break;
                        case 'spiAbi':
                            title = '**Hidden abilities:**';
                            displayValue = spiAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'thaye') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Thaye';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: thaEvi },
                            { name: '**Traits:**', value: thaTra },
                            { name: '**Hidden abilities:**', value: thaAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'thaEvi':
                            title = '**Evidence:**';
                            displayValue = thaEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'thaTra':
                            title = '**Traits:**';
                            displayValue = thaTra;
                            descriptionValue = 'traits';
                            break;
                        case 'thaAbi':
                            title = '**Hidden abilities:**';
                            displayValue = thaAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'twins') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Twins';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: twiEvi },
                            { name: '**Traits:**', value: twiTra },
                            { name: '**Hidden abilities:**', value: twiAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'twiEvi':
                            title = '**Evidence:**';
                            displayValue = twiEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'twiTra':
                            title = '**Traits:**';
                            displayValue = twiTra;
                            descriptionValue = 'traits';
                            break;
                        case 'twiAbi':
                            title = '**Hidden abilities:**';
                            displayValue = twiAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'wraith') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Wraith';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: wraEvi },
                            { name: '**Traits:**', value: wraTra },
                            { name: '**Hidden abilities:**', value: wraAbi }
                        )
                } else {
                    // if specifics are displayed, change values to reply with
                    let title;
                    let displayValue;
                    let descriptionValue;
                    switch(option) {
                        case 'wraEvi':
                            title = '**Evidence:**';
                            displayValue = wraEvi;
                            descriptionValue = 'evidence';
                            break;
                        case 'wraTra':
                            title = '**Traits:**';
                            displayValue = wraTra;
                            descriptionValue = 'traits';
                            break;
                        case 'wraAbi':
                            title = '**Hidden abilities:**';
                            displayValue = wraAbi;
                            descriptionValue = 'abilities';
                            break;
                    }

                    // update the embed
                    ghostEmbed
                        .addFields(
                            { name: title, value: displayValue }
                        ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
                }
                // reply with embed
                await interaction.editReply({ embeds: [ghostEmbed] });

                // NEXT GHOST ----------------------------------------------------------
            } else if (interaction.options.getSubcommand() === 'yokai') {
                const option = interaction.options.getString('display') ?? 'all';
                const ghostName = 'Yokai';

                // set embed title
                ghostEmbed.setTitle(ghostName);

                // if everything should be displayed
                if (option === 'all') {
                    // update embed
                    ghostEmbed
                        .setDescription(`All information about ${ghostName}!`)
                        .addFields(
                            { name: '**Evidence:**', value: yokEvi },
                            { name: '**Traits:**', value: yokTra },
                            { name: '**Hidden abilities:**', value: yokAbi }
)
} else {
// if specifics are displayed, change values to reply with
let title;
let displayValue;
let descriptionValue;
switch(option) {
 case 'yokEvi':
  title = '**Evidence:**';
  displayValue = yokEvi;
  descriptionValue = 'evidence';
  break;
 case 'yokTra':
  title = '**Traits:**';
  displayValue = yokTra;
  descriptionValue = 'traits';
  break;
 case 'yokAbi':
  title = '**Hidden abilities:**';
  displayValue = yokAbi;
  descriptionValue = 'abilities';
break;
}

// update the embed
ghostEmbed
 .addFields(
 { name: title, value: displayValue }
  ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
}
// reply with embed
await interaction.editReply({ embeds: [ghostEmbed] });

// NEXT GHOST ----------------------------------------------------------
} else if (interaction.options.getSubcommand() === 'yurei') {
const option = interaction.options.getString('display') ?? 'all';
const ghostName = 'Yurei';

// set embed title
ghostEmbed.setTitle(ghostName);

// if everything should be displayed
if (option === 'all') {
// update embed
ghostEmbed
 .setDescription(`All information about ${ghostName}!`)
 .addFields(
  { name: '**Evidence:**', value: yurEvi },
  { name: '**Traits:**', value: yurTra },
  { name: '**Hidden abilities:**', value: yurAbi }
)
                  
} else {
// if specifics are displayed, change values to reply with
let title;
let displayValue;
let descriptionValue;
switch(option) {
 case 'yurEvi':
  title = '**Evidence:**';
  displayValue = yurEvi;
  descriptionValue = 'evidence';
  break;
 case 'yurTra':
  title = '**Traits:**';
  displayValue = yurTra;
  descriptionValue = 'traits';
  break;
 case 'yurAbi':
  title = '**Hidden abilities:**';
  displayValue = yurAbi;
  descriptionValue = 'abilities';
  break;
}

// update the embed
ghostEmbed
 .addFields(
  { name: title, value: displayValue }
  ).setDescription(`Check the ${ghostName} ${descriptionValue}!`)
}
// reply with embed
await interaction.editReply({ embeds: [ghostEmbed] });
              
}}}