const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Pfad zu deinem Ghost-Ordner
const ghostsFolder = path.join(__dirname, '../displays/ghosts');

// Liste aller JSON-Dateien im Ordner
const ghostFiles = fs.readdirSync(ghostsFolder).filter(file => file.endsWith('.json'));

// Erstelle die Choices automatisch aus den JSON-Dateien
const ghostChoices = ghostFiles.map(file => {
  const rawData = fs.readFileSync(path.join(ghostsFolder, file), 'utf-8');
  const ghostData = JSON.parse(rawData);
  return { name: ghostData.name, value: file.replace('.json', '') }; // value = Dateiname ohne .json
});

// Slash Command erstellen
const ghostCommand = new SlashCommandBuilder()
  .setName('ghost')
  .setDescription('Shows information about a ghost')
  .addStringOption(option =>
    option
      .setName('type')
      .setDescription('Select which ghost to show')
      .setRequired(true)
      .addChoices(...ghostChoices) // Alle automatisch geladenen Ghosts
  );

module.exports = {
  data: ghostCommand,

  async execute(interaction) {
    const ghostType = interaction.options.getString('type'); // z.B. "testi"
    const filePath = path.join(ghostsFolder, `${ghostType}.json`);

    try {
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const ghostData = JSON.parse(rawData);

      // Embed erstellen
      const embed = new EmbedBuilder()
        .setTitle(ghostData.name)
        .addFields(
          { name: 'Evidence', value: ghostData.evidence || 'N/A' },
          { name: 'Trait', value: ghostData.trait || 'N/A' },
          { name: 'Ability', value: ghostData.ability || 'N/A' }
        )
        .setColor('#52FFFA')
        .setFooter({ text: 'Booo!',
          })

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      await interaction.reply({ content: 'Could not load information for this ghost.', ephemeral: true });
    }
  }
};
