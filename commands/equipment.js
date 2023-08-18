const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('./events');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('equipment')
        .setDescription('Information about all equipment.')

        // writing book
        .addSubcommand(subcommand =>
            subcommand
                .setName('writing-book')
                .setDescription('How to use the Ghost Writing Book'))
        
        // video camera
        .addSubcommand(subcommand =>
            subcommand
                .setName('video-camera')
                .setDescription('How to use head mounted & normal video camera'))

        // candle
        .addSubcommand(subcommand =>
            subcommand
                .setName('candle')
                .setDescription('How to use the candle'))
        
        // crucifx
        .addSubcommand(subcommand =>
            subcommand
                .setName('crucifix')
                .setDescription('How to use the Crucifix'))
        
        // dots
        .addSubcommand(subcommand =>
            subcommand
                .setName('dots')
                .setDescription('How to use the D.O.T.S. Projector'))

        // emf
        .addSubcommand(subcommand =>
            subcommand
                .setName('emf-reader')
                .setDescription('How to use the EMF reader'))
        
        // flashlight
        .addSubcommand(subcommand =>
            subcommand
                .setName('flashlight')
                .setDescription('How to use the fashlight'))

        // lighter
        .addSubcommand(subcommand =>
            subcommand
                .setName('lighter')
                .setDescription('How to use the lighter'))

        // motion sensor
        .addSubcommand(subcommand =>
            subcommand
                .setName('motion-sensor')
                .setDescription('How to use the motion sensor'))

        // photo camera
        .addSubcommand(subcommand =>
            subcommand
                .setName('photo-camera')
                .setDescription('How to use the photo camera'))

        // sanity pills
        .addSubcommand(subcommand =>
            subcommand
                .setName('sanity-pills')
                .setDescription('How to use the sanity pils'))

        // salt
        .addSubcommand(subcommand =>
            subcommand
                .setName('salt')
                .setDescription('How to use the salt'))
        
        // smudge sticks
        .addSubcommand(subcommand =>
            subcommand
                .setName('smudge-sticks')
                .setDescription('How to use the smudge sticks'))

        // sound sensor & paramic
        .addSubcommand(subcommand =>
            subcommand
                .setName('sound')
                .setDescription('How to use the sound sensor & parabolic microphone'))

        // spirit box
        .addSubcommand(subcommand =>
            subcommand
                .setName('spirit-box')
                .setDescription('How to use the spirit box'))
            
        // spirit box questons
        .addSubcommand(subcommand =>
            subcommand
                .setName('spirit-questions')
                .setDescription('Questions you can use with the spirit box'))

        // thermometer
        .addSubcommand(subcommand =>
            subcommand
                .setName('thermometer')
                .setDescription('How to use the thermometer'))

        // tripod
        .addSubcommand(subcommand =>
            subcommand
                .setName('tripod')
                .setDescription('How to use the tripod'))

        // uv light
        .addSubcommand(subcommand =>
            subcommand
                .setName('uv-light')
                .setDescription('How to use UV lights')),
        
    // execute command
    async execute(interaction) {
        // get subcommand
        const sub = interaction.options.getSubcommand();

        // global properties
        const equipmentEmbed = new EmbedBuilder()
            .setColor('#00FF00')
            .setFooter({
                text: 'Boooo! :D'
            });
        
        // local properties
        if (sub === 'writing-book') {
            equipmentEmbed
                .setTitle('Ghost Writing Book')
                .setDescription('The Ghost Writing book is used to obtain Ghost Writing by placing it near the Ghost.')
                .addFields(
                    { name: '**How to use:** ', value: 'place the Book on the Floor with secondary action (Default: F) in the Ghostroom.'},
                    { name: '**Evidence/reward:** ', value: "If Ghost Writing is an Evidence type for the ghost, the ghost has a chance of interacting with the book by writing in it. When this happens, the book will slightly levitate and the pen will start to frantically scribble on the pages visually and audibly, followed by the pen being thrown on the ground. The ghost can also write in the book by throwing or moving the book."},
                    { name: '**IMPORTANT:**', value: 'If the book has moved without being written in, **writing is not an evidence** (excluding nightmare) \n \nOnce written in, the book can be photographed using a Photo Camera to receive photo reward.'}
                );
        } else if (sub === 'video-camera') {
            equipmentEmbed
                .setTitle('(Head Mounted) Video Camera')
                .setDescription('The Video Camera can be used to detect Ghost orbs and observe the Ghostroom')
                .addFields(
                    { name: '**How to use:** ', value: 'Holding in Hand will automatically turn it on. Right click activates Night vision. Placing the Camera with secondary action (Default: F) keep the camera on after placing it, move Mouse while secondary action is pressed to rotate.'},
                    { name: '**Evidence/reward:** ', value: "Use the Camera to look around in the Ghostroom to find Ghost Orbs. If Camera is placed in the Ghost Room pointing at D.O.T.S Projector it can be checked from the Computer in the Van."},
                    { name: '**IMPORTANT:**', value: "The video camera's night vision function is very useful when using a D.O.T.S Projector as the ghost's silhouette is harder to see without night vision. The Head mounted Camera can be used to help teams track each other and to see Ghost Orbs."}
                );
        } else if (sub === 'candle') {
            equipmentEmbed
                .setTitle('Candle')
                .setDescription('The Candle can be used as light source, to prevent sanity to drain and for an objective')
                .addFields(
                    { name: '**How to use:** ', value: 'Players can light a candle held in their hand if they carry a lighter in their inventory. A candle placed down can also be lit by holding a lighter, aiming at the candle and lighting it up. Candles can be placed with secondary action (Default: F).'},
                    { name: '**Evidence/reward:** ', value: "When a ghost interacts with a candle, the fire will be extinguished with a blowing 'sigh' effect. A candle will also extinguish itself after a few minutes if the Ghost has not blown it out first. An objective may appear on the objective board requiring ghost hunters to detect a ghost's presence using a candle. When held, a lit candle will stop passive sanity drain that results from being in the dark. "},
                    { name: '**IMPORTANT:**', value: "Throwing a lit candle, or leaving it out in heavy rain and toggle it into inventory will cause it to extinguish. A candle toppling over may also extinguish, depending on velocity. The Candle can be kept on while a Hunt for Light."}
                );
        } else if (sub === 'crucifix') {
            equipmentEmbed
                .setTitle('Crucifix')
                .setDescription('The crucifix is used to prevent ghosts from hunting, if placed correctly.')
                .addFields(
                    { name: '**How to use:** ', value: 'The Crucifix can be placed (Default: F) in the Ghostroom. When placing it you can see the range of its effect.'},
                    { name: '**Evidence/reward:** ', value: "If it is placed in a 3m range (5m for Demon) of the Ghost, it will prevent the Ghost from Hunting."},
                    { name: '**IMPORTANT:**', value: "The Crucifix will only prevent a Hunt from happening and not stop a Hunt when already started!"}
                );
        } else if (sub === 'dots') {
            equipmentEmbed
                .setTitle('D.O.T.S. Projector')
                .setDescription('The D.O.T.S Projector can be used to reveal the ghost running across it very quickly.')
                .addFields(
                    { name: '**How to use:** ', value: 'place the Projector on the Floor with secondary action (Default: F) in the Ghostroom. '},
                    { name: '**Evidence/reward:** ', value: "Either watch in the Room or place a Video Camera (p.camera) to see the Dots evidence. There is a chance that the Ghost apears as a mesh-like figure will appear running or crawling through the grid"},
                    { name: '**IMPORTANT:**', value: "Dead players cannot see the ghost pass through the D.O.T.S. Projector. Looking at the D.O.T.S Projector through a video camera with night vision on, and lights in the room turned off may help, as the silhouette is often much clearer and more developed when seen through night vision. \nWhen you see D.O.T.S you can photograph it using a Photo Camera to receive photo reward."}
                );
        } else if (sub === 'emf-reader') {
            equipmentEmbed
                .setTitle('EMF Reader')
                .setDescription('The EMF reader used to read the strength of electromagnetic fields in the nearby environment.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and turn on with right click.'},
                    { name: '**Evidence/reward:** ', value: "Whenever a ghost interacts with the environment and depending on the type of interaction, the EMF reader will light up various numbers of its LEDs. If the ghost has EMF Level 5 as a possible piece of evidence, each EMF occurrence of Levels 2 or 3 has a 25% chance to trigger a Level 5 indication instead. "},
                    { name: '**IMPORTANT:**', value: "During hunts or when the ghost manifests, EMF readers within 10 metres of the ghost will malfunction and display random values between level 1 and 4."}
                );
        } else if (sub === 'flashlight') {
            equipmentEmbed
                .setTitle('Flashlight')
                .setDescription('The Flashlight is used as source of light in the game. It cannot be turned off by the Ghost.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and activate with primary use key (default: Right click)'},
                    { name: '**Evidence/reward:** ', value: "You will see better"},
                    { name: '**IMPORTANT:**', value: "If you like to be able to see, you should use the flashlight, and always have it on you."}
                )
                .setFooter({
                    text:'Why did you look this up? Literally just.. You will see better. Yes. You will see better.'}
                );
        } else if (sub === 'lighter') {
            equipmentEmbed
                .setTitle('Lighter')
                .setDescription('The lighter is used to light Smudge Sticks, candles, and summoning circles. It emits a small amount of light when activated and held by the player.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and turn on with primary use key (default: Right click), Light objects (Candles or Smudge Sticks) with Secondary action (Default: F). Alternatively, if the lighter is in the inventory, smudge sticks or candles being held in the hand can be lit by pressing the Secondary Use key (Default: F). '},
                    { name: '**Evidence/reward:** ', value: "Ability to use smudge sticks and light candles."},
                    { name: '**IMPORTANT:**', value: "The Lighter can be kept on while a Hunt for Light."}
                );
        } else if (sub === 'motion-sensor') {
            equipmentEmbed
                .setTitle('Motion Sensor')
                .setDescription('The Movement Sensor can help in tracking the movement of the Ghost.')
                .addFields(
                    { name: '**How to use:** ', value: 'Place it on a Wall with secondary action (Default: F).'},
                    { name: '**Evidence/reward:** ', value: "The Motion Sensor displays on the Site Map in the Van as a red bar. When a player, ghost, or dead player walks past it, the motion sensor will illuminate the immediate area with a bright light. The bar on the Site Map inside the truck will also turn green temporarily, and an audible beep will play from the monitor."},
                    { name: '**IMPORTANT:**', value: "The motion sensor must be below eye-height to work. Placing it around waist-height is the safest way to go. Putting a motion sensor on every exit from a hall next to where the ghost has been detected can speed up tracking its movement around the location."}
                );
        } else if (sub === 'photo-camera') {
            equipmentEmbed
                .setTitle('Photo Camera')
                .setDescription('The Photo Camera is a digital camera that can be used to take pictures of objects in-game.')
                .addFields(
                    { name: '**How to use:** ', value: 'Holding in Hand will automatically turn it on. Use primary use key (default: Right click) to take a picture.  Each photo camera can take a maximum of five photos, with the number of remaining shots displayed on the top-right of the display.'},
                    { name: '**Evidence/reward:** ', value: "The first 10 pictures recorded in journal and that are labeled in black in the journal will give the player a monex and XP reward. Type p.pics for more information!"},
                    { name: '**IMPORTANT:**', value: "Photos captured are intentionally not synced over with other players; photos are taken and rendered individually on each client. This can cause confusion, as ghosts can show up for one person but not another."}
                );
        } else if (sub === 'sanity-pills') {
            equipmentEmbed
                .setTitle('Sanity Pills')
                .setDescription("Sanity Pills replenish a player's sanity.")
                .addFields(
                    { name: '**How to use:** ', value: `Hold in Hand and teke them with primary use key (default: Right click).** The empty bottle will be thrown to the ground and can't be used again.`},
                    { name: '**Evidence/reward:** ', value: "You will regain a bit of your sanity."},
                    { name: '**IMPORTANT:**', value: "Consuming a sanity pill will replenish a certain amount of the player's sanity up to the maximum of 100%, depending on difficulty: \n**Amateur** - 40% \n**Intermediate** - 35% \n**Professional** - 30% \n**Nightmare** - 25%"}
                );
        } else if (sub === 'salt') {
            equipmentEmbed
                .setTitle('Salt')
                .setDescription('Salt piles can be used to detect footsteps which can be photographed for additional reward money.')
                .addFields(
                    { name: '**How to use:** ', value: 'Place Salt on the Floor with secondary action (Default: F) in the Ghostroom.'},
                    { name: '**Evidence/reward:** ', value: "When a ghost walks onto a salt pile, a sole-like imprint will be left in the salt pile. Within the next 10 seconds after the salt has been stepped in, footprints may also be created if the ghost moves and makes footstep sounds, which can be found by shining a UV light around the area where the ghost walked. Taking a photo of these footprints counts toward photo rewards. "},
                    { name: '**IMPORTANT:**', value: "Taking a picture of the salt pile will also give photo reward. Ghosts will not step in salt during a hunt."}
                );
        } else if (sub === 'smudge-sticks') {
            equipmentEmbed
                .setTitle('Smudge Sticks')
                .setDescription('Smudge Sticks will deter the ghost from hunting for a period of time when burned.')
                .addFields(
                    { name: '**How to use:** ', value: 'Smudge sticks that are thrown on a surface can be lit by holding either a lit lighter or a lit candle, and pressing the primary Use key (Default: Right click) while aiming at the smudge stick. You can also light a smudge stick while holding it by having a lighter in your inventory and pressing the Secondary Use key (Default: F). Throwing smudge sticks at a lit candle will also light it up.'},
                    { name: '**Evidence/reward:** ', value: "Type p.smudging for info about smudging while not hunting. When the smudge stick effect is successfully applied during a Hunt, the ghost will wander aimlessly for 5 seconds."},
                    { name: '**IMPORTANT:**', value: "-"}
               );
        } else if (sub === 'sound') {
            equipmentEmbed
                .setTitle('Sound Sensor & Parabolic Microphone')
                .setDescription('The Sound Sensor detects sounds in the vicinity, allowing the player to track any ghost activity. The Parabolic Microphone is a portable version of the sound sensor.')
                .addFields(
                    { name: '**How to use:** ', value: 'Place the Sensor on a table, on the Floor or other objects with Secondary Use Key (Default: F). \nParabolic microphones have to be hold in Hand and turned on by primary use key (default: Right click).'},
                    { name: '**Evidence/reward:** ', value: "The Sound Sensor will detect any noise in a spherical area around the sensor itself. The detection area is highlighted yellow on the Site Map in the Van. \n \nThe parabolic microphone has two functions. It allows the player to hear an idle ghost's paranormal sounds (voices, growls, etc.) and footsteps. It also displays a numeric value when pointed in the direction of a recent noise. The value updates every second."},
                    { name: '**IMPORTANT:**', value: "The player should remain aware of other noise disturbances, such as doors being opened or closed. Talking or the Walkie-Talkie won't cause a reading."}
                );
        } else if (sub === 'spirit-box') {
            equipmentEmbed
                .setTitle('Spirit Box')
                .setDescription('The Spirit Box allows some ghosts to communicate with players.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and turn it on with primary use key (default: Right click). It can be dropped on the Floor as soon it stays on and the player is still in range of the Spirit Box'},
                    { name: '**Evidence/reward:** ', value: "When the Player is in the Ghostroom or in a 3m range of the Ghost there is a a 2/3 chance the Ghost answers the asked question if it is a Evidence given by the type of Ghost."},
                    { name: '**IMPORTANT:**', value: "**The lights must be off while using spirit Box.** The Ghost either replies to everyone or just to people who are alone, stated on the whiteboard and in the journal \n**Type p.spiritquestions to see a list of all questions!**"}
                );
        } else if (sub === 'spirit-questions') {
            equipmentEmbed
                .setTitle('Spirit Box questions')
                .setDescription('A List of some askable questions for the Spirit Box')
                .addFields(
                    { name: '**Aggression Questions:** ', value: '- "What do you want?" \n- "Why are you here?" \n- "Do you want to hurt us?" \n- "Are you angry?" \n- "Do you want us here?" \n- "Shall we leave?" \n- "Should we leave?" \n- "Do you want us to leave?" \n- "What should we do?" \n- "Can we help?" \n- "Is anything wrong?" \n- "Are you friendly?"'},
                    { name: '**Location questions** ', value: '-"Where are you?" \n- "Are you close?" \n- "Can you show yourself?" \n- "Give us a sign." \n- "Let us know you are here." \n- "Show yourself." \n- "Can you talk?" \n- "Speak to us." \n- "Are you here?" \n- "Are you with us?" \n- "Anybody with us?" \n- "Is anyone here?" \n- "Anybody in the room?" \n- "Anybody here?" \n- "Is there a spirit here?" \n- "Is there a Ghost here?" \n- "What is your location?"'},
                    { name: '**Age questions:**', value: '- "How old are you?" \n- "How young are you?" \n- "What is your age?" \n- "When were you born?" \n- "Are you a child?" \n- "Are you old?" \n- "Are you young?"'}
                );
        } else if (sub === 'thermometer') {
            equipmentEmbed
                .setTitle('Thermometer')
                .setDescription('The Thermometer is used to read the temperatures in the nearby environment.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and activate with primary use key (default: Right click). When trying to find a room with abnormal temperatures, point towards the ground and stay in each room for at least 3-5 seconds to accurately read the temperature of the room.'},
                    { name: '**Evidence/reward:** ', value: "If the Thermometer shows a value under 0°C it is evidence for Freezing temperature."},
                    { name: '**IMPORTANT:**', value: "The reading shown will update every two seconds. Temperatures readings at or below 9°C or 45°F in Clear Skies weather, and below 6°C or 39.6°F in other types of weather, is generally an indication that the ghost is located within the room. "}
                );
        } else if (sub === 'tripod') {
            equipmentEmbed
                .setTitle('Tripod')
                .setDescription('Tripods are used to mount video cameras, essentially acting as a portable surface for them.')
                .addFields(
                    { name: '**How to use:** ', value: 'Picking up a video camera and placing it on top of the tripod with secundary use key (default: F) will mount the camera on the tripod. Tripods are bulky items, and thus take up your hand slot while carrying it; they cannot be stored in your inventory.'},
                    { name: '**Evidence/reward:** ', value: "Tripods can be used to position video cameras in places where no suitable surface is available to place a video camera alone. The height is also suitable for observing any evidence of D.O.T.S. Projector."},
                    { name: '**IMPORTANT:**', value: "A tripod must be placed by dropping it; it cannot be placed via the Secondary Use key. The tripod drop directly below the player, and will face the direction the player was facing when they dropped it. "}
                );
        } else if (sub === 'uv-light') {
            equipmentEmbed
                .setTitle('UV Flashlight & Glowstick')
                .setDescription('The UV Flashlight used to detect Fingerprints and Footprints.')
                .addFields(
                    { name: '**How to use:** ', value: 'Hold in Hand and activate with primary use key (default: Right click)'},
                    { name: '**Evidence/reward:** ', value: "Some types of Ghosts will leave Fingerprints on doors, light switches, and windows. Also most Ghost leave Footsteps after put salt."},
                    { name: '**IMPORTANT:**', value: "A UV Flashlight is not required to take a photo of fingerprints, only for players to see them; they may be discovered by errant pictures from the Photo Camera without having the use of a UV Flashlight at all. Using the Glowstick makes it easier to find Fingerprints and Foodsteps bc of the wider range."}
                );
        };
        
        // respond
        await interaction.reply({ embeds: [equipmentEmbed] });
    }
};