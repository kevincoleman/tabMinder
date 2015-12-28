var mongoose = require('mongoose');

var SettingsSchema = new mongoose.Schema({
  emailsOn: {type: Boolean, default: true},
  emailFrequency: {type: String, default: 'monthly'},
  delinquentAmount: {type: Number, default: 100}
});

mongoose.model('Settings', SettingsSchema);
