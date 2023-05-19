const {
  EmbedBuilder,
  InteractionType,
  ButtonBuilder,
  TextInputStyle,
  TextInputBuilder,
  ModalBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder
} = require("discord.js");
const {
  readdirSync
} = require("fs");
const config = require(`../../config.json`);
const {
  updateLocale
} = require("moment");

//button 1
global.role1 = '-'
global.label1 = '-'
global.color1 = "Secondary"

module.exports = {
  name: 'interactionCreate',
  execute: async (interaction) => {
    let client = interaction.client;

    /////////////// PANEL 1        

    // panel 1 - show modal - label1
    if (interaction.isButton()) {
      if (interaction.customId === `SetLabel1`) {
        const labelmodal = new ModalBuilder()
          .setCustomId('label1modal')
          .setTitle('Button 1 Label');
        const label1input = new TextInputBuilder()
          .setCustomId('label1modalinput')
          .setLabel("Enter Button Label")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const label1row = new ActionRowBuilder().addComponents(label1input);

        labelmodal.addComponents(label1row);
        interaction.showModal(labelmodal)
      }
    }
    //respond to modal - label1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'label1modal') {
        let Value = interaction.fields.getTextInputValue('label1modalinput')
        global.label1 = Value
        if (role1 == '-') {
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
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole1')
              .setLabel('Set Button Role')
              .setDisabled(false)
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
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton1')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel1')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole1')
              .setLabel('Set Button Role')
              .setDisabled(true)
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
              .setCustomId('SendPanel1')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }




    // panel 1 - show modal - role1
    if (interaction.isButton()) {
      if (interaction.customId === `SetRole1`) {
        const rolemodal = new ModalBuilder()
          .setCustomId('role1modal')
          .setTitle('Button 1 Role ID');
        const role1input = new TextInputBuilder()
          .setCustomId('role1modalinput')
          .setLabel("Enter Role ID")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const role1row = new ActionRowBuilder().addComponents(role1input);

        rolemodal.addComponents(role1row);
        interaction.showModal(rolemodal)
      }
    }

    //respond to modal - role1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'role1modal') {
        let Value = interaction.fields.getTextInputValue('role1modalinput')
        global.role1 = Value
        if (label1 == '-') {
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
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole1')
              .setLabel('Set Button Role')
              .setDisabled(true)
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
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton1')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel1')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole1')
              .setLabel('Set Button Role')
              .setDisabled(true)
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
              .setCustomId('SendPanel1')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }

    // panel 1 - color select
    if (interaction.isButton()) {
      if (interaction.customId === `SetColor1`) {
        const select = new StringSelectMenuBuilder()
          .setCustomId('selectcolor1')
          .setPlaceholder('Seclect Button 1 Color')
          .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('Gray')
            .setValue('gray'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Green')
            .setValue('green'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Red')
            .setValue('red'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Blurple')
            .setValue('blurple'),
          );
        const row = new ActionRowBuilder()
          .addComponents(select);
        interaction.reply({
          components: [row],
          ephemeral: true
        })
      }
    }

    //respond to color select
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == 'selectcolor1') {
        if (interaction.values == "gray") {
          global.color1 = 'Secondary'
        }
        if (interaction.values == "green") {
          global.color1 = 'Success'
        }
        if (interaction.values == "red") {
          global.color1 = 'Danger'
        }
        if (interaction.values == "blurple") {
          global.color1 = 'Primary'
        }
        interaction.update({
          components: [],
          content: "Color Selected",
          ephemeral: true
        })
      }
    }

    //send panel 1
    if (interaction.isButton()) {
      if (interaction.customId === `SendPanel1`) {
        const updatepanelsend1 = new EmbedBuilder()
          .setDescription(`Panel now sent if you wish to change this panel delete the message and create another panel with "/createrolepanel" or if you wish to adjust embed text check the github [here](https://github.com/Zesty-ZDev/Simple-Tickets/commits?author=Zesty-ZDev) for info on how to do so `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })

        const panelsend1 = new EmbedBuilder()
          .setDescription(`Click the button below to get your roles`)
          .setTitle(`${client.user.username}`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const panelsendbutton1 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role1}`)
            .setLabel(`${label1}`)
            .setStyle(`${color1}`),
          )

        interaction.update({
          embeds: [updatepanelsend1],
          components: []
        })
        interaction.channel.send({
          embeds: [panelsend1],
          components: [panelsendbutton1]
        })

        global.role1 = '-'
        global.label1 = '-'
        global.color1 = "Secondary"
      }
    }

    //add button 1 
    if (interaction.isButton()) {
      if (interaction.customId === `AddButton1`) {

        const controlpanel2 = new EmbedBuilder()
          .setDescription(`Create a button role by clicking the buttons below\n\nRed buttons / Set Button Label and Role are required to be filled in for the panel if Purple / Set Button Bolor is left unchanged it will default to gray\n\n Once you have filled in all required options you can either add another button or send the panel as in\n\n **You are currently editing role button 2 of 5** `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const controlpanelrow2 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId('AddButton')
            .setLabel('Add Role Button')
            .setDisabled(true)
            .setStyle('Secondary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetLabel2')
            .setLabel('Set Button Label')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetRole2')
            .setLabel('Set Button Role')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetColor2')
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

        interaction.update({
          embeds: [controlpanel2],
          components: [controlpanelrow2]
        })
      }
    }



    ///PANEL 2 //////////////////////////////////////

    // panel 2 - show modal - label1
    if (interaction.isButton()) {
      if (interaction.customId === `SetLabel2`) {
        const labelmodal = new ModalBuilder()
          .setCustomId('label2modal')
          .setTitle('Button 2 Label');
        const label1input = new TextInputBuilder()
          .setCustomId('labelmodal2input')
          .setLabel("Enter Button Label")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const labelrow = new ActionRowBuilder().addComponents(label1input);

        labelmodal.addComponents(labelrow);
        interaction.showModal(labelmodal)
      }
    }
    //respond to modal - label2
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'label2modal') {
        let Value = interaction.fields.getTextInputValue('labelmodal2input')
        global.label2 = Value
        if (role2 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton2')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel2')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole2')
              .setLabel('Set Button Role')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor2')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPane2')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton2')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel2')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole2')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor2')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel2')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }




    // panel 2 - show modal - role1
    if (interaction.isButton()) {
      if (interaction.customId === `SetRole2`) {
        const rolemodal = new ModalBuilder()
          .setCustomId('role2modal')
          .setTitle('Button 2 Role ID');
        const role1input = new TextInputBuilder()
          .setCustomId('role2modalinput')
          .setLabel("Enter Role ID")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const role1row = new ActionRowBuilder().addComponents(role1input);

        rolemodal.addComponents(role1row);
        interaction.showModal(rolemodal)
      }
    }

    //respond to modal - role1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'role2modal') {
        let Value = interaction.fields.getTextInputValue('role2modalinput')
        global.role2 = Value
        if (label2 == '-') {
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
              .setCustomId('SetLabel2')
              .setLabel('Set Button Label')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole2')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor2')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel2')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton2')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel2')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole2')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor2')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel2')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }

    // panel 2 - color select
    if (interaction.isButton()) {
      if (interaction.customId === `SetColor2`) {
        const select = new StringSelectMenuBuilder()
          .setCustomId('selectcolor2')
          .setPlaceholder('Seclect Button 2 Color')
          .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('Gray')
            .setValue('gray'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Green')
            .setValue('green'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Red')
            .setValue('red'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Blurple')
            .setValue('blurple'),
          );
        const row = new ActionRowBuilder()
          .addComponents(select);
        interaction.reply({
          components: [row],
          ephemeral: true
        })
      }
    }

    //respond to color select
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == 'selectcolor2') {
        if (interaction.values == "gray") {
          global.color2 = 'Secondary'
        }
        if (interaction.values == "green") {
          global.color2 = 'Success'
        }
        if (interaction.values == "red") {
          global.color2 = 'Danger'
        }
        if (interaction.values == "blurple") {
          global.color2 = 'Primary'
        }
        interaction.update({
          components: [],
          content: 'Color Selected'
        })
      }
    }

    //send panel 2
    if (interaction.isButton()) {
      if (interaction.customId === `SendPanel2`) {
        const updatepanelsend1 = new EmbedBuilder()
          .setDescription(`Panel now sent if you wish to change this panel delete the message and create another panel with "/createrolepanel" or if you wish to adjust embed text check the github [here](https://github.com/Zesty-ZDev/Simple-Tickets/commits?author=Zesty-ZDev) for info on how to do so `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })

        const panelsend1 = new EmbedBuilder()
          .setDescription(`Click the buttons below to get your roles`)
          .setTitle(`${client.user.username}`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const panelsendbutton1 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role1}`)
            .setLabel(`${label1}`)
            .setStyle(`${color1}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role2}`)
            .setLabel(`${label2}`)
            .setStyle(`${color2}`),
          )

        interaction.update({
          embeds: [updatepanelsend1],
          components: []
        })
        interaction.channel.send({
          embeds: [panelsend1],
          components: [panelsendbutton1]
        })

        global.role1 = '-'
        global.label1 = '-'
        global.color1 = "Secondary"
        global.role2 = '-'
        global.label2 = '-'
        global.color2 = "Secondary"
      }
    }

    //add button 2 
    if (interaction.isButton()) {
      if (interaction.customId === `AddButton2`) {

        const controlpanel2 = new EmbedBuilder()
          .setDescription(`Create a button role by clicking the buttons below\n\nRed buttons / Set Button Label and Role are required to be filled in for the panel if Purple / Set Button Bolor is left unchanged it will default to gray\n\n Once you have filled in all required options you can either add another button or send the panel as in\n\n **You are currently editing role button 3 of 5** `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const controlpanelrow2 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId('AddButton3')
            .setLabel('Add Role Button')
            .setDisabled(true)
            .setStyle('Secondary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetLabel3')
            .setLabel('Set Button Label')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetRole3')
            .setLabel('Set Button Role')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetColor3')
            .setLabel('Set Button Color')
            .setStyle('Primary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SendPanel3')
            .setLabel('SendPanel')
            .setDisabled(true)
            .setStyle('Success'),
          );

        interaction.update({
          embeds: [controlpanel2],
          components: [controlpanelrow2]
        })
      }
    }

    ///PANEL 3 //////////////////////////////////////

    // panel 3 - show modal - label1
    if (interaction.isButton()) {
      if (interaction.customId === `SetLabel3`) {
        const labelmodal = new ModalBuilder()
          .setCustomId('label3modal')
          .setTitle('Button 3 Label');
        const label1input = new TextInputBuilder()
          .setCustomId('labelmodal3input')
          .setLabel("Enter Button Label")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const labelrow = new ActionRowBuilder().addComponents(label1input);

        labelmodal.addComponents(labelrow);
        interaction.showModal(labelmodal)
      }
    }
    //respond to modal - label2
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'label3modal') {
        let Value = interaction.fields.getTextInputValue('labelmodal3input')
        global.label3 = Value
        if (role3 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton3')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel3')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole3')
              .setLabel('Set Button Role')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor3')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPane3')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton3')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel3')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole3')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor3')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel3')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }




    // panel 2 - show modal - role1
    if (interaction.isButton()) {
      if (interaction.customId === `SetRole3`) {
        const rolemodal = new ModalBuilder()
          .setCustomId('role3modal')
          .setTitle('Button 3 Role ID');
        const role1input = new TextInputBuilder()
          .setCustomId('role3modalinput')
          .setLabel("Enter Role ID")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const role1row = new ActionRowBuilder().addComponents(role1input);

        rolemodal.addComponents(role1row);
        interaction.showModal(rolemodal)
      }
    }

    //respond to modal - role1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'role3modal') {
        let Value = interaction.fields.getTextInputValue('role3modalinput')
        global.role3 = Value
        if (label3 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton3')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel3')
              .setLabel('Set Button Label')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole3')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor3')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel3')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton3')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel3')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole3')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor3')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel3')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }

    // panel 2 - color select
    if (interaction.isButton()) {
      if (interaction.customId === `SetColor3`) {
        const select = new StringSelectMenuBuilder()
          .setCustomId('selectcolor3')
          .setPlaceholder('Seclect Button 3 Color')
          .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('Gray')
            .setValue('gray'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Green')
            .setValue('green'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Red')
            .setValue('red'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Blurple')
            .setValue('blurple'),
          );
        const row = new ActionRowBuilder()
          .addComponents(select);
        interaction.reply({
          components: [row],
          ephemeral: true
        })
      }
    }

    //respond to color select
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == 'selectcolor3') {
        if (interaction.values == "gray") {
          global.color3 = 'Secondary'
        }
        if (interaction.values == "green") {
          global.color3 = 'Success'
        }
        if (interaction.values == "red") {
          global.color3 = 'Danger'
        }
        if (interaction.values == "blurple") {
          global.color3 = 'Primary'
        }
        interaction.update({
          components: [],
          content: 'Color Selected'
        })
      }
    }

    //send panel 2
    if (interaction.isButton()) {
      if (interaction.customId === `SendPanel3`) {
        const updatepanelsend1 = new EmbedBuilder()
          .setDescription(`Panel now sent if you wish to change this panel delete the message and create another panel with "/createrolepanel" or if you wish to adjust embed text check the github [here](https://github.com/Zesty-ZDev/Simple-Tickets/commits?author=Zesty-ZDev) for info on how to do so `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })

        const panelsend1 = new EmbedBuilder()
          .setDescription(`Click the buttons below to get your roles`)
          .setTitle(`${client.user.username}`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const panelsendbutton1 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role1}`)
            .setLabel(`${label1}`)
            .setStyle(`${color1}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role2}`)
            .setLabel(`${label2}`)
            .setStyle(`${color2}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role3}`)
            .setLabel(`${label3}`)
            .setStyle(`${color3}`),
          )

        interaction.update({
          embeds: [updatepanelsend1],
          components: []
        })
        interaction.channel.send({
          embeds: [panelsend1],
          components: [panelsendbutton1]
        })

        global.role1 = '-'
        global.label1 = '-'
        global.color1 = "Secondary"
        global.role2 = '-'
        global.label2 = '-'
        global.color2 = "Secondary"
        global.role3 = '-'
        global.label3 = '-'
        global.color3 = "Secondary"
      }
    }

    //add button 2 
    if (interaction.isButton()) {
      if (interaction.customId === `AddButton3`) {

        const controlpanel2 = new EmbedBuilder()
          .setDescription(`Create a button role by clicking the buttons below\n\nRed buttons / Set Button Label and Role are required to be filled in for the panel if Purple / Set Button Bolor is left unchanged it will default to gray\n\n Once you have filled in all required options you can either add another button or send the panel as in\n\n **You are currently editing role button 4 of 5** `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const controlpanelrow2 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId('AddButton4')
            .setLabel('Add Role Button')
            .setDisabled(true)
            .setStyle('Secondary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetLabel4')
            .setLabel('Set Button Label')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetRole4')
            .setLabel('Set Button Role')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetColor4')
            .setLabel('Set Button Color')
            .setStyle('Primary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SendPanel4')
            .setLabel('SendPanel')
            .setDisabled(true)
            .setStyle('Success'),
          );

        interaction.update({
          embeds: [controlpanel2],
          components: [controlpanelrow2]
        })
      }
    }





    ///PANEL 4 //////////////////////////////////////

    // panel 4 - show modal - label1
    if (interaction.isButton()) {
      if (interaction.customId === `SetLabel4`) {
        const labelmodal = new ModalBuilder()
          .setCustomId('label4modal')
          .setTitle('Button 4 Label');
        const label1input = new TextInputBuilder()
          .setCustomId('labelmodal4input')
          .setLabel("Enter Button Label")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const labelrow = new ActionRowBuilder().addComponents(label1input);

        labelmodal.addComponents(labelrow);
        interaction.showModal(labelmodal)
      }
    }
    //respond to modal - label2
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'label4modal') {
        let Value = interaction.fields.getTextInputValue('labelmodal4input')
        global.label4 = Value
        if (role4 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton4')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel4')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole4')
              .setLabel('Set Button Role')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor4')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPane4')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton4')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel4')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole4')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor4')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel4')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }




    // panel 2 - show modal - role1
    if (interaction.isButton()) {
      if (interaction.customId === `SetRole4`) {
        const rolemodal = new ModalBuilder()
          .setCustomId('role4modal')
          .setTitle('Button 4 Role ID');
        const role1input = new TextInputBuilder()
          .setCustomId('role4modalinput')
          .setLabel("Enter Role ID")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const role1row = new ActionRowBuilder().addComponents(role1input);

        rolemodal.addComponents(role1row);
        interaction.showModal(rolemodal)
      }
    }

    //respond to modal - role1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'role4modal') {
        let Value = interaction.fields.getTextInputValue('role4modalinput')
        global.role4 = Value
        if (label4 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton4')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel4')
              .setLabel('Set Button Label')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole4')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor4')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel4')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton4')
              .setLabel('Add Role Button')
              .setDisabled(false)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel4')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole4')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor4')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel4')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }

    // panel 2 - color select
    if (interaction.isButton()) {
      if (interaction.customId === `SetColor4`) {
        const select = new StringSelectMenuBuilder()
          .setCustomId('selectcolor4')
          .setPlaceholder('Seclect Button 4 Color')
          .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('Gray')
            .setValue('gray'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Green')
            .setValue('green'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Red')
            .setValue('red'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Blurple')
            .setValue('blurple'),
          );
        const row = new ActionRowBuilder()
          .addComponents(select);
        interaction.reply({
          components: [row],
          ephemeral: true
        })
      }
    }

    //respond to color select
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == 'selectcolor4') {
        if (interaction.values == "gray") {
          global.color4 = 'Secondary'
        }
        if (interaction.values == "green") {
          global.color4 = 'Success'
        }
        if (interaction.values == "red") {
          global.color4 = 'Danger'
        }
        if (interaction.values == "blurple") {
          global.color4 = 'Primary'
        }
        interaction.update({
          components: [],
          content: 'Color Selected'
        })
      }
    }

    //send panel 2
    if (interaction.isButton()) {
      if (interaction.customId === `SendPanel4`) {
        const updatepanelsend1 = new EmbedBuilder()
          .setDescription(`Panel now sent if you wish to change this panel delete the message and create another panel with "/createrolepanel" or if you wish to adjust embed text check the github [here](https://github.com/Zesty-ZDev/Simple-Tickets/commits?author=Zesty-ZDev) for info on how to do so `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })

        const panelsend1 = new EmbedBuilder()
          .setDescription(`Click the buttons below to get your roles`)
          .setTitle(`${client.user.username}`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const panelsendbutton1 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role1}`)
            .setLabel(`${label1}`)
            .setStyle(`${color1}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role2}`)
            .setLabel(`${label2}`)
            .setStyle(`${color2}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role3}`)
            .setLabel(`${label3}`)
            .setStyle(`${color3}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role4}`)
            .setLabel(`${label4}`)
            .setStyle(`${color4}`),
          )

        interaction.update({
          embeds: [updatepanelsend1],
          components: []
        })
        interaction.channel.send({
          embeds: [panelsend1],
          components: [panelsendbutton1]
        })

        global.role1 = '-'
        global.label1 = '-'
        global.color1 = "Secondary"
        global.role2 = '-'
        global.label2 = '-'
        global.color2 = "Secondary"
        global.role3 = '-'
        global.label3 = '-'
        global.color3 = "Secondary"
        global.role4 = '-'
        global.label4 = '-'
        global.color4 = "Secondary"
      }
    }

    //add button 2 
    if (interaction.isButton()) {
      if (interaction.customId === `AddButton4`) {

        const controlpanel2 = new EmbedBuilder()
          .setDescription(`Create a button role by clicking the buttons below\n\nRed buttons / Set Button Label and Role are required to be filled in for the panel if Purple / Set Button Bolor is left unchanged it will default to gray\n\n Once you have filled in all required options you can either add another button or send the panel as in\n\n **You are currently editing role button 5 of 5** `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const controlpanelrow2 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId('AddButton')
            .setLabel('Add Role Button')
            .setDisabled(true)
            .setStyle('Secondary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetLabel5')
            .setLabel('Set Button Label')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetRole5')
            .setLabel('Set Button Role')
            .setStyle('Danger'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SetColor5')
            .setLabel('Set Button Color')
            .setStyle('Primary'),
          )
          .addComponents(
            new ButtonBuilder()
            .setCustomId('SendPanel5')
            .setLabel('SendPanel')
            .setDisabled(true)
            .setStyle('Success'),
          );

        interaction.update({
          embeds: [controlpanel2],
          components: [controlpanelrow2]
        })
      }
    }

    //PANEL 5 //////////////////////////////////////

    // panel 5 - show modal - label1
    if (interaction.isButton()) {
      if (interaction.customId === `SetLabel5`) {
        const labelmodal = new ModalBuilder()
          .setCustomId('label5modal')
          .setTitle('Button Label');
        const label1input = new TextInputBuilder()
          .setCustomId('labelmodal5input')
          .setLabel("Enter Button 5 Label")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const labelrow = new ActionRowBuilder().addComponents(label1input);

        labelmodal.addComponents(labelrow);
        interaction.showModal(labelmodal)
      }
    }
    //respond to modal - label2
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'label5modal') {
        let Value = interaction.fields.getTextInputValue('labelmodal5input')
        global.label5 = Value
        if (role5 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton5')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel5')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole5')
              .setLabel('Set Button Role')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor5')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPane5')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton5')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel5')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole5')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor5')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel5')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }




    // panel 2 - show modal - role1
    if (interaction.isButton()) {
      if (interaction.customId === `SetRole5`) {
        const rolemodal = new ModalBuilder()
          .setCustomId('role5modal')
          .setTitle('Button 5 Role ID');
        const role1input = new TextInputBuilder()
          .setCustomId('role5modalinput')
          .setLabel("Enter Role ID")
          .setMaxLength(25)
          .setStyle(TextInputStyle.Short);
        const role1row = new ActionRowBuilder().addComponents(role1input);

        rolemodal.addComponents(role1row);
        interaction.showModal(rolemodal)
      }
    }

    //respond to modal - role1
    if (interaction.isModalSubmit()) {
      if (interaction.customId === 'role5modal') {
        let Value = interaction.fields.getTextInputValue('role5modalinput')
        global.role5 = Value
        if (label5 == '-') {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton5')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel5')
              .setLabel('Set Button Label')
              .setDisabled(false)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole5')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor5')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel5')
              .setLabel('SendPanel')
              .setDisabled(true)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        } else {
          const controlpanelrow = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
              .setCustomId('AddButton5')
              .setLabel('Add Role Button')
              .setDisabled(true)
              .setStyle('Secondary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetLabel5')
              .setLabel('Set Button Label')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetRole5')
              .setLabel('Set Button Role')
              .setDisabled(true)
              .setStyle('Danger'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SetColor5')
              .setLabel('Set Button Color')
              .setStyle('Primary'),
            )
            .addComponents(
              new ButtonBuilder()
              .setCustomId('SendPanel5')
              .setLabel('SendPanel')
              .setDisabled(false)
              .setStyle('Success'),
            );
          interaction.update({
            components: [controlpanelrow]
          });
        }
      }
    }

    // panel 2 - color select
    if (interaction.isButton()) {
      if (interaction.customId === `SetColor5`) {
        const select = new StringSelectMenuBuilder()
          .setCustomId('selectcolor5')
          .setPlaceholder('Seclect Button 5 Color')
          .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('Gray')
            .setValue('gray'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Green')
            .setValue('green'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Red')
            .setValue('red'),
            new StringSelectMenuOptionBuilder()
            .setLabel('Blurple')
            .setValue('blurple'),
          );
        const row = new ActionRowBuilder()
          .addComponents(select);
        interaction.reply({
          components: [row],
          ephemeral: true
        })
      }
    }

    //respond to color select
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == 'selectcolor5') {
        if (interaction.values == "gray") {
          global.color5 = 'Secondary'
        }
        if (interaction.values == "green") {
          global.color5 = 'Success'
        }
        if (interaction.values == "red") {
          global.color5 = 'Danger'
        }
        if (interaction.values == "blurple") {
          global.color5 = 'Primary'
        }
        interaction.update({
          components: [],
          content: 'Color Selected'
        })
      }
    }

    //send panel 2
    if (interaction.isButton()) {
      if (interaction.customId === `SendPanel5`) {
        const updatepanelsend1 = new EmbedBuilder()
          .setDescription(`Panel now sent if you wish to change this panel delete the message and create another panel with "/createrolepanel" or if you wish to adjust embed text check the github [here](https://github.com/Zesty-ZDev/Simple-Tickets/commits?author=Zesty-ZDev) for info on how to do so `)
          .setTitle(`${client.user.username} | Control Panel`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })

        const panelsend1 = new EmbedBuilder()
          .setDescription(`Click the buttons below to get your roles`)
          .setTitle(`${client.user.username}`)
          .setColor(config.color)
          .setFooter({
            text: `${client.user.username} by Z-Dev`
          })
        const panelsendbutton1 = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role1}`)
            .setLabel(`${label1}`)
            .setStyle(`${color1}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role2}`)
            .setLabel(`${label2}`)
            .setStyle(`${color2}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role3}`)
            .setLabel(`${label3}`)
            .setStyle(`${color3}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role4}`)
            .setLabel(`${label4}`)
            .setStyle(`${color4}`),
            new ButtonBuilder()
            .setCustomId(`RoleAddButton-${role5}`)
            .setLabel(`${label5}`)
            .setStyle(`${color5}`),
          )

        interaction.update({
          embeds: [updatepanelsend1],
          components: []
        })
        interaction.channel.send({
          embeds: [panelsend1],
          components: [panelsendbutton1]
        })

        global.role1 = '-'
        global.label1 = '-'
        global.color1 = "Secondary"
        global.role2 = '-'
        global.label2 = '-'
        global.color2 = "Secondary"
        global.role3 = '-'
        global.label3 = '-'
        global.color3 = "Secondary"
        global.role4 = '-'
        global.label4 = '-'
        global.color4 = "Secondary"
        global.role5 = '-'
        global.label5 = '-'
        global.color5 = "Secondary"
      }
    }

  }
}