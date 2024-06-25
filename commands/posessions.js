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

        // monkey paw
        .addSubcommand(subcommand =>
            subcommand
                .setName('monkey-paw')
                .setDescription('Tips for Monkey Paw!'))

        // monkey paw wishes
        .addSubcommand(subcommand =>
            subcommand
                .setName('monkey-paw-wishes')
                .setDescription('Wishes for Monkey Paw!'))

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

        // ouija questions
        .addSubcommand(subcommand => 
            subcommand
                .setName('ouija-questions')
                .setDescription('Questions to ask the ouija board!'))

        // voodo doll
        .addSubcommand(subcommand =>
            subcommand
                .setName('voodo-doll')
                .setDescription('Tips for Voodo Doll!')),
    
    // execute command
    async execute(interaction) {
        await interaction.deferReply();
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
                   { name: '**Cards:**', value: "The Sun - Fully restored Sanity \nThe Moon - Sanity drops to 0% \nThe Tower - Interaction (This includes Ghost writing, D.O.T.S and touching Doors) and doubles activity for 20s \nThe Wheel of Fortune - Either increases the player's sanity by 25% if it burns green or decreases it by 25% if it burns red \nThe Devil - Ghost Event \nThe High Priestess - resurrects a dead player. If no one is dead, it will revive the next player who dies \nThe Hanged Man - instant dead \nDeath - Cursed Hunt \nThe Hermit - Teleports the ghost back to its ghost room and prevents it from leaving for 1 minute. \nThe Fool - Appears as another card at first, this card does not have any effect on the player. "}
                )
                .setImage('https://media.discordapp.net/attachments/937732109735452714/938518967327272960/unknown.png?width=705&height=408')
        } else if (subcommand === 'monkey-paw') {
            posessionsEmbed
                .setTitle('Monkey Paw')
                .setDescription('The Monkey Paw grant the Player wishes. But be careful, you may get more than you wished for! **All information can be wrong or incomplete! As soon there are information from Phasmophobia themselves we gonna update them here, if you find mistakes please let us know!**')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an empty hand and say your wish. When using text recognition use primary use key (default: right click) to activate the UI. The wishes can be found in Sunny Meadows and will be added to the Journal once you got them.'},
                    { name: '**What it does:** ', value: "PLayer get a number of wishes depending on the multiplier: \n0x-1.99x: 5 wishes \n2x-2.99x: 4 wishes \n3x or higher: 3 wishes \nEvery wish has a downside so be careful. Use p.monkeypawwishes or /monkey-paw-wishes to see what you can ask."}
                    )              .setImage('https://static.wikia.nocookie.net/phasmophobia/images/c/cc/Monkey_Paw.png/revision/latest?cb=20230228154004')
        }  else if (subcommand === 'monkey-paw-wishes') {
            posessionsEmbed
            .setTitle('Monkey Paw wishes')
            .addFields(
                { name: 'Player related wishes: ', value: '**I wish to be sane:**  Averages everyone’s sanity to 50% (in- or decrease). \nDownside: Teleports the ghost to a random room, sets it to its favorite, increases sanity drain rate by 50% of the current value \n**I wish to be save:** Opens up the nearest hiding spot \nDownside: Smashes the light in the room. The ghost can now hear and sense the player who wished equipment at any range! \n**I wish to leave:** Unlocks the front door at any time, including during hunts (the hunt will continue as long any player is still inside the house). \nDownside: Stops you moving for 5s, then slowly returns your movement speed over 5s!'},
{ name: 'Ghost related wishes: ', value: '**I wish to see the ghost:** Triggers a ghost event in front of you. \nDownside: Ghost initiates a hunt straight afterward and Reduces player vision for that hunt with a black fog! \n**I wish for activity:** Doubles all ghost activity for 2mins (throws, doors, roaming, abilities). \nDownside: Breaks the fuse box and locks the front door for 2mins! \n**I wish to trap the Ghost:** Teleports the ghost to its room and locks all of its doors for 1 min. Ghost cannot hunt, roam, or do abilities while locked in its room. \nDownside: Locks all doors of the wishing player’s room for 1 min and the ghost will hunt as soon as the doors are unlocked!'},
{ name: 'Other wishes: ', value: '**I wish for life:** Revive a dead player. \nDownside: 50% chance to kill the player who wished! \n**I wish for knowledge:** Removes 1 incorrect evidence and corresponding ghost types from your journal. \nDownside: For the rest of the game muffles your audio and vision! \n**I wish for (weather):** Choose any weather type, e.g; sunrise, snow, rain. \nDownside: Reduces Sanity by 25%! \n**I wish for anything:** A random wish will be done'}
 )
        }else if (subcommand === 'summoning-circle') {
            posessionsEmbed
                .setTitle('Summoning Circle')
                .setDescription('Summoning Circle is used to summon the ghost. This can be used to get a ghost photo reward (p.ghost).')
                .addFields(
                    { name: '**How to use:** ', value: 'Lighting all five red candles with a lighter.'},
                    { name: '**What it does:** ', value: "Once all five candles are lit, the ghost will be summoned and fully materialized, and stay motionless for **1 to 6 seconds,** unable to kill players. After the 'grace period', it will immediately **initiate a cursed hunt** on the spot. Once the summoning circle has been activated, it **cannot be used again.**"},
                    { name: '**Sanity drop:**', value: `Each candle deducts **16% sanity**, leading to a **total of 80%** being deducted for all candles. \n \n**Note:** every player in a **3 meter radius** of the candle being lit loses sanity, **not only the player lighting it** \n \nIf your sanity while lighting the Summoning circle is to low the candles will extinguish the candle! when lighting the Last candle with to less sanity there is a chance the Ghost will start Hunting and gets summoned when lighting the Last Candel. Lighting a candle will instantly end the setup time. **The Ghost will get teleported to the Summoning Circle and instant start Hunting from there without grace period!**`}
                    )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938520238964736030/unknown.png')
        } else if (subcommand === 'haunted-mirror') {
            posessionsEmbed
                .setTitle('Haunted Mirror')
                .setDescription('The Haunted Mirror can be used to locate the Ghost Room.')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click)'},
                    { name: '**What it does:** ', value: "hen activated, the haunted mirror will show a view of a part of the ghost room as a sweeping panorama, allowing players to locate the room by cross-reference. If the user's sanity reaches zero, the mirror will break and start a cursed hunt near the user's position. The mirror breaking is noted by the player as the front of the mirror smashing, and by others nearby, by a cracking noise."},
                    { name: '**Sanity drop:**', value: "Using the haunted mirror will rapidly drain the sanity of the player at a rate of about 7.5%/s. **It will always drain at least 20% sanity per use!**"}
                )
                .setImage('https://cdn.discordapp.com/attachments/923208644588359700/938844277465825330/unknown.png')
        } else if (subcommand === 'music-box') {
            posessionsEmbed
                .setTitle('Music Box')
                .setDescription('The music box is a cursed possession that can be used to pinpoint the location of the ghost, though at considerable risk if one is careless with it!')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click). **The music box can only be used once.**'},
                    { name: '**What it does:** ', value: "The music box will make the ghost sing along while remaining invisible. If the music box is 5 meters from the ghost it will manifest and start walking towards the box. \nIf the ghost touches it, walks for more than 5 seconds, or the player drops the box while playing, the music box will stop and the ghost will initiate a cursed hunt. \n**The box will also stop playing if a hunt starts as a result of other reasons.** \nThe music box can be handheld or placed on the floor. In all cases, the box will close once it stops playing."},
                    { name: '**Sanity drop:**', value: "**A player holding the music box and listening to the complete song loses approximately 73% of their sanity.** A player's sanity will drop only if the player can hear the song, and the sanity drop decreases the further a player is from the music box. It can be heared in a range of 20m."}
                )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938521010355978300/unknown.png')
        } else if (subcommand === 'ouija-board') {
            posessionsEmbed
                .setTitle('Ouija Board')
                .setDescription('The Ouija Board can be used to communicate with the ghost at the cost of sanity.')
                .addFields(
                    { name: '**How to use:** ', value: " Pick it up with an Empty Hand. It can be used while holdin it or laying on the Floor using the primary use key (default: Right click). It don't have to be in the Ghostroom to do so!"},
                    { name: '**What it does:** ', value: "Questions can be asked while holding the push-to-talk key if enabled.\nTo deactivate the Ouija Board, a player must say 'Goodbye', which will make the planchette disappear. If all players walk away more than 5m from an active Ouija Board, or the player currently asking a question has insufficient sanity to 'pay' for the question, the board will break itself up and trigger a cursed hunt."},
                    { name: '**Sanity drop:**', value: "Depending on the Question: Ghost current position 50%, Hide and seek 25%, Number of people in room, bone location 20%, others 5%. \n**Type p.ouijaquestions For a List of all askable questions!**"}
                )
                .setImage('https://cdn.discordapp.com/attachments/937732109735452714/938519069718618152/unknown.png')
                .setFooter({
                    text: 'Psst! Say "hide and seek" to the Ouija board to play a fun little game with the ghost!'
                })
        } else if (subcommand === 'ouija-questions') {
            posessionsEmbed
                .setTitle('Ouija Board questions')
                .addFields(
                    { name: 'List of all Questions: ', value: '- Location \n-Age \n-Death \n-Room count \n-Sanity \n-Method of death \n-Bone location \n-Yes or no \n-Hide and seek \n-Feeling \n-Purpose \n-Joke \n-Shyness'}
                )
        } else if (subcommand === 'voodo-doll') {
            posessionsEmbed
                .setTitle('Voodoo Doll')
                .setDescription('The voodoo doll is a cursed possession used to force the ghost to perform interactions.')
                .addFields(
                    { name: '**How to use:** ', value: 'Pick it up with an Empty Hand, hold it and using the primary use key (default: Right click)'},
                    { name: '**What it does:** ', value: "Interacting with the voodoo doll will cause one of the 10 pins stuck in the doll to be pushed into it at random. This will cause the ghost to perform an interaction (This includes Ghost writing, D.O.T.S and touching Doors). If the heart pin is pressed down a cursed hunt will initiate . If the player's sanity is less than 10%, all of the pins will get pushed in and a cursed hunt will occur as well."},
                    { name: '**Sanity drop:**', value: "5 to 10% per Pin. If the heart pin is pressed down, the player's sanity will drop by 10 to 20% instead."}
                )
                .setImage('https://cdn.discordapp.com/attachments/883056386114728036/938524976666017882/unknown.png')
        };
        await interaction.editReply({ embeds: [posessionsEmbed] });
    }
};