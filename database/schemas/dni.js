const mongoose = require('mongoose');

const guildConfigSchema2 = mongoose.Schema({
  nombre: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false
  },
  apellido1:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  },
  apellido2:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  },
  genero:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  },
  nacionalidad:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  },
  nacimiento:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  },
  discordId:{
    type: mongoose.SchemaTypes.String,
    required: true,
    default: false,
  }

});

module.exports = mongoose.model('dni-module', guildConfigSchema2);
