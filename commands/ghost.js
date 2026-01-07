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
      .setAutocomplete(true) // <-- Autocomplete
  );

module.exports = {
  data: ghostCommand,

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused(); // Was der Nutzer gerade tippt

    const filtered = ghostDataMap.filter(ghost =>
      ghost.name.toLowerCase().includes(focusedValue.toLowerCase())
    ).slice(0, 25); // Discord erlaubt max. 25 Vorschläge

    await interaction.respond(
      filtered.map(ghost => ({ name: ghost.name, value: ghost.value }))
    );
  },

  async execute(interaction) {
    const ghostType = interaction.options.getString('type'); // z.B. "testi"
    const filePath = path.join(ghostsFolder, `${ghostType}.json`);

    try {
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const ghostData = JSON.parse(rawData);

      const embed = new EmbedBuilder()
        .setTitle(ghostData.name)
        .addFields(
          { name: 'Evidence', value: ghostData.evidence || 'N/A' },
          { name: 'Traits', value: ghostData.traits || 'N/A' },
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
