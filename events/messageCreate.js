const { Events } = require('discord.js');
const path = require('path');

const prefix = '!';
const textCmdDiv = '../textCommands';

module.exports = {
    name: Events.MessageCreate,
    execute(msg) {
        if (!msg.content.startsWith(prefix)) return;
        const temp = msg.content.replace(prefix, '');
        const cmd = temp.trim().toLowerCase();

        if (cmd === 'ping') {
            const ping = require(path.join(__dirname, textCmdDiv, '/subFolder/ping.js'));
            ping(msg);
        }
    }
};