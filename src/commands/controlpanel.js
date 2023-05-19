const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  Options,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
} = require("discord.js");
const {
  SlashCommandBuilder
} = require("@discordjs/builders");
const config = require(`../../config.json`)
module.exports = {
  data: new SlashCommandBuilder()
    .setName("createrolepanel")
    .setDescription("Open the bot control panel")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .setDMPermission(false),
  run: async (client, interaction) => {

    const controlpanel = new EmbedBuilder()
      .setDescription(`Create a button role by clicking the buttons below\n\nRed buttons / Set Button Label and Role are required to be filled in for the panel if Purple / Set Button Bolor is left unchanged it will default to gray\n\n Once you have filled in all required options you can either add another button or send the panel as in\n\n **You are currently editing role button 1 of 5** `)
      .setTitle(`${client.user.username} | Control Panel`)
      .setColor(config.color)
      .setFooter({
        text: `${client.user.username} by Z-Dev`
      })
    const controlpanelrow = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
        .setCustomId('AddButton')
        .setLabel('Add Role Button')
        .setDisabled(true)
        .setStyle('Secondary'),
      )
      .addComponents(
        new ButtonBuilder()
        .setCustomId('SetLabel1')
        .setLabel('Set Button Label')
        .setStyle('Danger'),
      )
      .addComponents(
        new ButtonBuilder()
        .setCustomId('SetRole1')
        .setLabel('Set Button Role')
        .setStyle('Danger'),
      )
      .addComponents(
        new ButtonBuilder()
        .setCustomId('SetColor1')
        .setLabel('Set Button Color')
        .setStyle('Primary'),
      )
      .addComponents(
        new ButtonBuilder()
        .setCustomId('SendPanel')
        .setLabel('SendPanel')
        .setDisabled(true)
        .setStyle('Success'),
      );
    interaction.reply({
      embeds: [controlpanel],
      components: [controlpanelrow],
      ephemeral: true
    });

    global.role1 = '-'
    global.label1 = '-'
    global.color1 = "Secondary"
    //button 2
    global.role2 = '-'
    global.label2 = '-'
    global.color2 = "Secondary"
    //button 3
    global.role3 = '-'
    global.label3 = '-'
    global.color3 = "Secondary"
    //button 4
    global.role4 = '-'
    global.label4 = '-'
    global.color4 = "Secondary"
    //button 5
    global.role5 = '-'
    global.label5 = '-'
    global.color5 = "Secondary"
  }
};