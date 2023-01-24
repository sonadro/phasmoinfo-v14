const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
// grab all command files from commands directory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// grab the SlashCommandBuilder.toJSON() output of each command's data for deployment
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// construct & prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// deploy commands
(async () => {
    try {
        console.log(`Started GLOBALLY refreshing ${commands.length} application (/) commands.`);

        // put method is used to fully refresh all commands in teh guild with the current set
        const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log(`Successfully GLOBALLY reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();