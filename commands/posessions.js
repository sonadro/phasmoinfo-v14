const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('posessions')
        .setDescription('Gives information about various cursed objects')

        // tarot cards
        .addSubcommand(subcommand =>
            subcommand
                .setName('tarot-cards')
                .setDescription('Tips for Tarot Cards!'))

        // summoning circle
        .addSubcommand(subcommand =>
            subcommand
                .setName('summoning-circle')
                .setDescription('Tips for Summoning Circle!'))

        // haunted mirror
        .addSubcommand(subcommand =>
            subcommand
                .setName('haunted-mirror')
                .setDescription('Tips for Haunted Mirror!'))

        // music box
        .addSubcommand(subcommand =>
            subcommand
                .setName('music-box')
                .setDescription('Tips for Music Box!'))

        // ouija board
        .addSubcommand(subcommand =>
            subcommand
                .setName('ouija-board')
                .setDescription('Tips for Ouija Board!'))

        // voodo doll
        .addSubcommand(subcommand =>
            subcommand
                .setName('voodo-doll')
                .setDescription('Tips for Voodo Doll!')),
    
    // execute command
    async execute(interaction) {
        // global properties
        const posessionsEmbed = new EmbedBuilder()
            .setColor('#5900FF')
            .setFooter({
                text: 'Boooo! :D'
            });
        
        // local properties
        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'tarot-cards') {
            posessionsEmbed
                .setTitle('Tarot Cards')
                .setDescription('Tarot cards can trigger various random effects on both the player and the ghost.')
                .addFields(
                   { name: '**How to use:** ', value: 'Pick them up with an Empty Hand, hold it and using the primary use key (default: Right click).'},
                   { name: '**What it does:** ', value: "Each Tarot cards deck contains 10 randomly generated cards. There are various possible cards the player can draw from the deck, each having a unique effect on either the player or the ghost. After being used, each card will vanish in a colored flame that is dependent on its type. The cards must be drawn inside the investigation area for them to work. All Cards turning into fool during a hunt"},
                   { name: '**Cards:**', value: "The Sun - Fully restored Sanity \nThe Moon - Sanity drops to 0% \nThe Tower - Interaction (This includes Ghost writing, D.O.T.S and touching Doors) \nThe Wheel of Fortune - Either increases the player's sanity by 25% if it burns green or decreases it by 25% if it burns red \nThe Devil - Ghost Event \nThe High Priestess - resurrects a dead player. If no one is dead, it will revive the next player who dies \nThe Hanged Man - instant dead \nDeath - Cursed Hunt \nThe Hermit - Teleports the ghost back to its ghost room and prevents it from leaving for 1 minute. \nThe Fool - Appears as another card at first, this card does not have any effect on the player. "}
                )
                .setImage('https://media.discordapp.net/attachments/937732109735452714/938518967327272960/unknown.png?width=705&height=408');
        } else if (subcommand === 'summoning-circle') {
            posessionsEmbed
                .setTitle('Summoning Circle')
                .setDescription('Summoning Circle is used to summon the ghost. This can be used to get a ghost photo reward (p.ghost).')
                .addFields(
                    { name: '**How to use:** ', value: 'Lighting all five red candles with a lighter.'},
                    { name: '**What it does:** ', value: "Once all five candles are lit, the ghost will be summoned and fully materialized, and stay motionless for **1 to 6 seconds,** unable to kill players. After the 'grace period', it will immediately **initiate a cursed hunt** on the spot. Once the summoning circle has been activated, it **cannot be used again.**"},
                    { name: '**Sanity drop:**', value: `Each candle deducts **16% sanity**, leading to a **total of 80%** being deducted for all candles. \n \n**Note:** every player in a **3 meter radius** of the candle being lit loses sanity, **not only the player lighting it** \n \nIf your sanity while lighting the Summoning circle is to low there is a chance the Ghost will start Hunting and gets summoned when lighting the Last Candel **The Ghost will get teleported to the Summoning Circle and instant start Hunting from there without grace period!**`}
                    )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938520238964736030/unknown.png');
        } else if (subcommand === 'haunted-mirror') {
            posessionsEmbed
                .setTitle('Haunted Mirror')
                .setDescription('The Haunted Mirror can be used to locate the Ghost Room.')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click)'},
                    { name: '**What it does:** ', value: "hen activated, the haunted mirror will show a view of a part of the ghost room as a sweeping panorama, allowing players to locate the room by cross-reference. If the user's sanity reaches zero, the mirror will break and start a cursed hunt near the user's position. The mirror breaking is noted by the player as the front of the mirror smashing, and by others nearby, by a cracking noise."},
                    { name: '**Sanity drop:**', value: "Using the haunted mirror will rapidly drain the sanity of the player at a rate of about 7.5%/s. **It will always drain at least 20% sanity per use!**"}
                )
                .setImage('https://cdn.discordapp.com/attachments/923208644588359700/938844277465825330/unknown.png');
        } else if (subcommand === 'music-box') {
            posessionsEmbed
                .setTitle('Music Box')
                .setDescription('The music box is a cursed possession that can be used to pinpoint the location of the ghost, though at considerable risk if one is careless with it!')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click). **The music box can only be used once.**'},
                    { name: '**What it does:** ', value: "The music box will make the ghost sing along while remaining invisible. If the music box is 5 meters from the ghost it will manifest and start walking towards the box. \nIf the ghost touches it, walks for more than 5 seconds, or the player drops the box while playing, the music box will stop and the ghost will initiate a cursed hunt. \n**The box will also stop playing if a hunt starts as a result of other reasons.** \nThe music box can be handheld or placed on the floor. In all cases, the box will close once it stops playing."},
                    { name: '**Sanity drop:**', value: "**A player holding the music box and listening to the complete song loses approximately 73% of their sanity.** A player's sanity will drop only if the player can hear the song, and the sanity drop decreases the further a player is from the music box. It can be heared in a range of 20m."}
                )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938521010355978300/unknown.png');
        } else if (subcommand === 'ouija-board') {
            posessionsEmbed
                .setTitle('Ouija Board')
                .setDescription('The Ouija Board can be used to communicate with the ghost at the cost of sanity.')
                .addFields(
                    { name: '**How to use:** ', value: " Pick it up with an Empty Hand. It can be used while holdin it or laying on the Floor using the primary use key (default: Right click). It don't have to be in the Ghostroom to do so!"},
                    { name: '**What it does:** ', value: "Questions can be asked while holding the push-to-talk key if enabled.\nTo deactivate the Ouija Board, a player must say 'Goodbye', which will make the planchette disappear. If all players walk away more than 5m from an active Ouija Board, or the player currently asking a question has insufficient sanity to 'pay' for the question, the board will break itself up and trigger a cursed hunt."},
                    { name: '**Sanity drop:**', value: "Depending on the Question: Ghost current position 50%, Hide and seek 25%, Number of people in room, bone location 50%, others 5%. \n**Type p.ouijaquestions For a List of all askable questions!**"}
                )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938519069718618152/unknown.png')
                .setFooter({
                    text: 'Psst! Say "hide and seek" to the Ouija board to play a fun little game with the ghost!'
                });
        } else if (subcommand === 'ouija-questions') {
            // UNFINISHED -- this will never be called (for now)
            posessionsEmbed
                .setTitle('Ouija Board questions')
                .addFields(
                    { name: 'List of all Questions: ', value: '- Location \n-Age \n-Death \n-Room count \n-Sanity \n-Method of death \n-Bone location \n-Yes or no \n-Hide and seek \n-Feeling \n-Purpose \n-Joke \n-Shyness'}
                );
        } else if (subcommand === 'voodo-doll') {
            posessionsEmbed
                .setTitle('Voodoo Doll')
                .setDescription('The voodoo doll is a cursed possession used to force the ghost to perform interactions.')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click)'},
                    { name: '**What it does:** ', value: "Interacting with the voodoo doll will cause one of the 10 pins stuck in the doll to be pushed into it at random. This will cause the ghost to perform an interaction (This includes Ghost writing, D.O.T.S and touching Doors). If the heart pin is pressed down a cursed hunt will initiate . If the player's sanity is less than 10%, all of the pins will get pushed in and a cursed hunt will occur as well."},
                    { name: '**Sanity drop:**', value: "5 to 10% per Pin. If the heart pin is pressed down, the player's sanity will drop by 10 to 20% instead."}
                )
                .setImage('https://cdn.discordapp.com/attachments/883056386114728036/938524976666017882/unknown.png');
        };
        await interaction.reply({ embeds: [posessionsEmbed] });
    }
};