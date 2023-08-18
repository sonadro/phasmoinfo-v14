const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        console.log('------------------------- NEW INTERACTION -------------------------');

        // get matching command
        const command = interaction.client.commands.get(interaction.commandName);

        // if there is no matching command
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        };

        // execute command or log error, if there is any
        try {
            await command.execute(interaction);
        } catch (err) {
            console.error(`Error executing command '${interaction.commandName}'`);
            console.error(err);
        };
    },
};