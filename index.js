// import necessary discord.js classes
const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

// get local variable
const { local } = require('./config.json');

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
if (local == 'false') {
    // replit variables
    const token = process.env['TOKEN'];
    const keepAlive = require(__dirname + '/server.js');

    // dis-uniter
    const replitDisUniter = require('replit-dis-uniter');
    const bot = client;
    replitDisUniter(bot);

    // replit start
    keepAlive();
    client.login(token);
} else {
    // LOCAL START
    const { token } = require('./config.json');
    client.login(token);
};