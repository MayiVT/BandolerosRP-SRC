const { MessageEmbed, MessageAttachment } = require("discord.js");
const config = require("../botconfig/config.json");
const ee = require("../botconfig/embed.json");
const settings = require("../botconfig/settings.json");
const Canvas = require('canvas');
module.exports = {
  name: "dni",
  description: "Enseña el dni de una persona",
  cooldown: 1,
  memberpermissions: [],
  requiredroles: [],
  alloweduserids: [],
  options: [
		{"User": { name: "persona", description: "Selecciona la persona", required: false }},
],
  run: async (client, interaction) => {
    try{

		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId,
		        commandName, deferred, replied, ephemeral,
				options, id, createdTimestamp
		} = interaction;
		const { guild } = member;
    const Guild = require('../database/schemas/Guild');
    const DniDB = require('../database/schemas/dni');
		let UserOption = options.getUser("persona");
    if(!UserOption) UserOption = member.user;
/*
    const guildDB = await Guild.findOne({
        guildId: interaction.guild.id
    });
*/
    let db = await DniDB.findOne({
      discordId: UserOption.id
    }).catch(err => console.log(err))



    if(!db) {
      interaction.reply("Crea un dni con /creardni (Si no es tu dni, la otra persona tiene que crear el dni)");
      console.log("No tiene dni")
      //console.log(db.nombre + db.apellido1 + db.apellido2 + db.genero + db.nacionalidad + db.discorduser)
      return;
    } else {
      //console.log(db.nombre + db.apellido1 + db.apellido2 + db.genero + db.nacionalidad + db.discorduser)
    }


    const dniimg = "https://eledinamicas.files.wordpress.com/2015/04/dni-electronico1.png"
    const canvas = Canvas.createCanvas(500, 320);
		const context = canvas.getContext('2d');
    const background = await Canvas.loadImage(dniimg);
    let genero = {
      "mujer": "♀️",
      "hombre": "♂️"
    }

    	// This uses the canvas dimensions to stretch the image onto the entire canvas
    	context.drawImage(background, 0, 0, canvas.width, canvas.height);

      // Set the color of the stroke
	    context.strokeStyle = '#0099ff';

	    // Draw a rectangle with the dimensions of the entire canvas
	    context.strokeRect(0, 0, canvas.width, canvas.height);

      const avatar = await Canvas.loadImage(UserOption.displayAvatarURL({ format: 'jpg' }));

      context.drawImage(avatar, 350, 135, 145, 200);

      // Select the font size and type from one of the natively available fonts
	    context.font = '9px sans-serif';

	    // Select the style that will be used to fill the text in
	    context.fillStyle = '#000000';
      const memberdni = guild.members.cache.get(UserOption.id);
      const nombre = db.nombre;
      const generodni = genero[db.genero];
      const nacionalidad = db.nacionalidad;
	    // Actually fill the text with a solid color
	    context.fillText(memberdni.user.id, canvas.width / 32, canvas.height / 1.06);
      context.font = '12px sans-serif';
      context.fillText(nombre, canvas.width / 3.5, canvas.height / 2.9)
      context.fillText(generodni, canvas.width / 3.5, canvas.height / 2.35)
      context.fillText(db.apellido2, canvas.width / 3.5, canvas.height / 3.9)
      context.fillText(db.apellido1, canvas.width / 3.5, canvas.height / 5.8)
      context.fillText(db.nacimiento, canvas.width / 3.5, canvas.height / 2)
      context.font = '9px sans-serif';
      context.fillText(nacionalidad, canvas.width / 2.7, canvas.height / 2.36)

    	// Use the helpful Attachment class structure to process the file for you
    	const attachment = new MessageAttachment(canvas.toBuffer(), 'dni-image.png');

    	interaction.reply({ files: [attachment] });


/*
		if(StringOption == "botping") {
			await interaction.reply({content: `Getting the Bot Ping...`, ephemeral: true});
			interaction.editReply({content: `Bot Ping: \`${Math.floor((Date.now() - createdTimestamp) - 2 * Math.floor(client.ws.ping))} ms\``, ephemeral: true})
		}

		else {
		    interaction.reply({content: `Api Ping: \`${Math.floor(client.ws.ping)} ms\``, ephemeral: true})
		}*/


    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
