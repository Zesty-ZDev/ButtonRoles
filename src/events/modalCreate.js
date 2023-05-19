const { EmbedBuilder, InteractionType, ButtonBuilder, TextInputStyle, TextInputBuilder, ModalBuilder, ActionRowBuilder } = require("discord.js");
const { readdirSync } = require("fs");
const config = require(`../../config.json`)
module.exports = {
    name: 'interactionCreate',
    execute: async (interaction) => {
        let client = interaction.client;

        if (interaction.isButton()) {
            if (interaction.customId.includes(`RoleAddButton-`)) {
                const role = interaction.customId.slice(14)
                if(!interaction.member.roles.cache.has(role)){
                interaction.member.roles.add(role)
                .catch (() => interaction.channel.send({content: `Failed to add Role <@&${role}> (${role}) to <@${interaction.user.id}>`}))
                interaction.reply({content:`*Giving you the <@&${role}> role*`, ephemeral:true})
                }else{

                    interaction.member.roles.remove(role)
                    .catch (() => interaction.channel.send({content: `Failed to remove Role <@&${role}> (${role}) to <@${interaction.user.id}>`}))
                    interaction.reply({content:`*Removing your <@&${role}> role*`, ephemeral:true})

                }
            }
  
                }
            }


    } 

