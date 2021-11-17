const { MessageEmbed, MessageAttachment } = require("discord.js");
const config = require("../botconfig/config.json");
const ee = require("../botconfig/embed.json");
const settings = require("../botconfig/settings.json");
const Canvas = require('canvas');
module.exports = {
  name: "recreardni",
  description: "ReHace el dni",
  cooldown: 1,
  memberpermissions: [],
  requiredroles: ["901379522694369312", "901379161749356564", "901378015295049738", "901208887955443732"],
  alloweduserids: [],
  options: [
    {"User": { name: "usuario", description: "Cual es el usuario?", required: true }},
		{"String": { name: "nombre", description: "Cual es tu nombre?", required: true }},
    {"String": { name: "apellido", description: "Cual es tu apellido?", required: true }},
    {"String": { name: "segundo_apellido", description: "Cual es tu segundo apellido?", required: true }},
    {"StringChoices": { name: "genero", description: "Cual es tu genero?", required: true, choices: [["Hombre", "hombre"], ["Mujer", "mujer"]] }},
    {"String": { name: "nacionalidad", description: "Cual es tu nacionalidad?", required: true }},
    {"String": { name: "nacimiento", description: "Que dia naciste? (XX-XX-XXXX)", required: true }},

],
  run: async (client, interaction) => {
    try{

		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId,
		        commandName, deferred, replied, ephemeral,
				options, id, createdTimestamp
		} = interaction;
		const { guild } = member;
    let UserOption = options.getUser("usuario");
    const Guild = require('../database/schemas/Guild');
    const DniDB = require('../database/schemas/dni');
    const dniname = options.getString("nombre");
    const primerapellido = options.getString("apellido");
    const segundoapellido = options.getString("segundo_apellido");
    const nacionalidaddni = options.getString("nacionalidad");
    const fechanacimiento = options.getString("nacimiento");
    const genero = options.getString("genero")


    const guildDB = await Guild.findOne({
        guildId: interaction.guild.id
    });

    let db = await DniDB.findOne({
      discordId: UserOption.id
    })

    if(!db) {
      interaction.reply("No tiene dni!");
      return;
    }

    DniDB.update({
      discordId: UserOption.id,
      nombre: dniname,
      apellido1: primerapellido,
      apellido2: segundoapellido,
      genero: genero,
      nacionalidad: nacionalidaddni,
      nacimiento: fechanacimiento,
    }).then(
      interaction.reply("Dni recreado.")
    );





    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
