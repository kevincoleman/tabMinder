var mongoose = require('mongoose');

var PatronSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  balance: {type: Number, default: 0},
  delinquent: {type: Boolean, default: false},
  transactions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
});

mongoose.model('Patron', PatronSchema);
