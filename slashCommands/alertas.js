const { MessageEmbed } = require("discord.js");
const config = require("../botconfig/config.json");
const ee = require("../botconfig/embed.json");
const settings = require("../botconfig/settings.json");
module.exports = {
  name: "defcon", //the command name for the Slash Command
  description: "Gives you information on how fast the Bot is", //the command description for Slash Command Overview
  cooldown: 1,
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!
	//INFORMATIONS! You can add Options, but mind that the NAME MUST BE LOWERCASED! AND NO SPACES!!!, for the CHOCIES you need to add a array of arrays; [ ["",""] , ["",""] ]
		//{"Integer": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getInteger("ping_amount")
		//{"String": { name: "ping_amount", description: "How many times do you want to ping?", required: true }}, //to use in the code: interacton.getString("ping_amount")
		//{"User": { name: "ping_a_user", description: "To Ping a user lol", required: false }}, //to use in the code: interacton.getUser("ping_a_user")
		//{"Channel": { name: "what_channel", description: "To Ping a Channel lol", required: false }}, //to use in the code: interacton.getChannel("what_channel")
		//{"Role": { name: "what_role", description: "To Ping a Role lol", required: false }}, //to use in the code: interacton.getRole("what_role")
		//{"IntChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", 1], ["Discord Api", 2]] }, //here the second array input MUST BE A NUMBER // TO USE IN THE CODE: interacton.getInteger("what_ping")
		{"StringChoices": { name: "nivel", description: "Que nivel de alerta quieres poner?", required: true, choices: [["Defcon 1", "def1"], ["Defcon 2", "def2"], ["Defcon 3", "def3"], ["Defcon 4", "def4"], ["desactivar", "desactivar"]] }}, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
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
		const StringOption = options.getString("nivel"); //same as in StringChoices
		//let UserOption = options.getUser("OPTIONNAME");
		//let ChannelOption = options.getChannel("OPTIONNAME");
		//let RoleOption = options.getRole("OPTIONNAME");

		if(StringOption == "def1") {
			interaction.reply({content: `https://cdn.discordapp.com/attachments/777864883181584394/902958196908490822/Defcon_1.png`, ephemeral: false});
		}
    if(StringOption == "def2") {
			interaction.reply({content: `https://cdn.discordapp.com/attachments/777864883181584394/901462251809169458/Defcon_2.png`, ephemeral: false});
		}
    if(StringOption == "def3") {
			interaction.reply({content: `https://cdn.discordapp.com/attachments/777864883181584394/900811313805164574/Defcon_3.png`, ephemeral: false});
		}
    if(StringOption == "def4") {
			interaction.reply({content: `https://cdn.discordapp.com/attachments/777864883181584394/902392786836422666/Defcon_4.png`, ephemeral: false});
		}
    if(StringOption == "desactivar") {
			interaction.reply({content: `https://cdn.discordapp.com/attachments/777864883181584394/901831490772533248/Defcon_4.png`, ephemeral: false});
		}


    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
