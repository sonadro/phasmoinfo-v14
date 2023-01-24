const { Events } = require('discord.js');
const path = require('path');

const { prefix } = require('../config.json');
const textCmdDiv = '../textCommands';

module.exports = {
    name: Events.MessageCreate,
    execute(msg) {
        if (!msg.content.startsWith(prefix)) return;
        const args = msg.content.toLowerCase().replace(prefix, '').split(' ');
        const cmd = args.shift();

        if (cmd === 'ping') {
            const ping = require(path.join(__dirname, textCmdDiv, '/subFolder/ping.js'));
            ping(msg);
        }
    }
};