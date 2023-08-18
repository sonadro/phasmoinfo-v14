// import necessary discord.js classes
const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

// Change this variable to 'true' when running bot locally. Change this value to 'false' before pushing to github
const runningLocally = false;

// bot start
const startBot = function(local) {
    if (!local) {
        console.log('running replit startup');
        // This will start the bot for REPLIT:
        const keepAlive = require(__dirname + '/server.js');
        const { exec } = require('child_process');
        const token = process.env['TOKEN'];

        // start bot
        keepAlive();
        client.login(token);
    } else {
        console.log('running local startup ');
        // This will start the bot LOCALLY on your pc

        // grab local variables
        const { token } = require('./config.json');

        // sign in
        client.login(token);
    };
};

// new client instance
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// command handler
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    // new item in collection
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.warn(`[WARNING] - The command at ${filePath} is missing a required "data" or "execute" property.`);
    };
};

// events handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    };
};

// start bot
startBot(runningLocally);