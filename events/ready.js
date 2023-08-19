// discord events & activity type
const { Events, ActivityType, channelLink } = require('discord.js');

// import date functions
const { getDate, getTime } = require('../functions/getDate');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        
        // presence
        client.user.setPresence({
            activities: [{ name: '/about', type: ActivityType.Playing }],
            status: 'online'
        });

        // fetch restart message channel
        global.uptimechannel = client.channels.cache.find(
            channel => channel.name.toLowerCase() === "testt"
        );

        // get date & time
        const date = getDate();
        const time = getTime();

        // create message
        const restartMsg = `\`\`\`js\nRestarted\non: ${date}\nat: ${time}\`\`\``;

        // send restart message
        global.uptimechannel.send(restartMsg);
    },
};