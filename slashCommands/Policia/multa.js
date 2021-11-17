const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");

const Guild = require("../../database/schemas/Guild.js");
const Discord = require("discord.js")

module.exports = {
  name: "multa", //the command name for the Slash Command
  description: "da una multa a un usuario", //the command description for Slash Command Overview
  cooldown: 1,
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: ["901515455552946197", "901739914071257128"], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!
	//INFORMATIONS! You can add Options, but mind that the NAME MUST BE LOWERCASED! AND NO SPACES!!!, for the CHOCIES you need to add a array of arrays; [ ["",""] , ["",""] ]
		//{"Integer": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getInteger("ping_amount")
		{"String": { name: "articulos", description: "Que articulos ha inflingido?", required: true }}, //to use in the code: interacton.getString("ping_amount")
		{"User": { name: "infractor", description: "Selecciona al usuario infractor", required: true }}, //to use in the code: interacton.getUser("ping_a_user")
    {"String": { name: "total", description: "Cuanto dinero tiene de multa?", required: true }},
		//{"Channel": { name: "what_channel", description: "To Ping a Channel lol", required: false }}, //to use in the code: interacton.getChannel("what_channel")
		//{"Role": { name: "what_role", description: "To Ping a Role lol", required: false }}, //to use in the code: interacton.getRole("what_role")
		//{"IntChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", 1], ["Discord Api", 2]] }, //here the second array input MUST BE A NUMBER // TO USE IN THE CODE: interacton.getInteger("what_ping")
		//{"StringChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", "botping"], ["Discord Api", "api"]] }}, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
  ],
  run: async (client, interaction) => {
    try{
	    //console.log(interaction, StringOption)

		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId,
		        commandName, deferred, replied, ephemeral,
				options, id, createdTimestamp
		} = interaction;
		const { guild } = member;
		//let IntOption = options.getInteger("OPTIONNAME"); //same as in IntChoices
    let UserOption = options.getUser("infractor");
    const Article = options.getString("articulos");
    const Pay = options.getString("total");
    const MultaDate = new Date(interaction.createdTimestamp).toLocaleDateString();
		//let ChannelOption = options.getChannel("OPTIONNAME");
		//let RoleOption = options.getRole("OPTIONNAME");

const warnSchema = require("../../database/schemas/multa.js")
    let warnDoc = await warnSchema
          .findOne({
            guildID: guildId,
            memberID: UserOption.id,
          })
          .catch((err) => console.log(err));

        if (!warnDoc) {
          warnDoc = new warnSchema({
            guildID: guildId,
            memberID: UserOption.id,
            warnings: [Article],
            pago: [Pay],
            moderator: [interaction.member.user.id],
            date: [Date.now()],
          });

          await warnDoc.save().catch((err) => console.log(err));
          return interaction.reply(`**Multa hecha correctamente a: ${UserOption.username}**`)
        } /*else {
          if (warnDoc.warnings.length >= 3) {
            return message.channel.send(
              "This member has already been warned 3 times, use ban command to ban this user from this guild or use unwarn to remove the warnings from this user"
            );
          }*/

          warnDoc.warnings.push(Article);
          warnDoc.pago.push(Pay);
          warnDoc.moderator.push(interaction.member.user.id);
          warnDoc.date.push(Date.now());

          await warnDoc.save().catch((err) => console.log(err));

          const embed = new MessageEmbed()
            .setDescription(`Multado **${UserOption.username}** \n Articulos: **${Article}** Pago: **${Pay}**`)
            .setColor("RANDOM");


     return interaction.reply({embeds: [new MessageEmbed()
       .setDescription(`Multado **${UserOption.username}** \n Articulos: **${Article}** Pago: **${Pay}**`)
       .setColor("RANDOM")]});

    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
