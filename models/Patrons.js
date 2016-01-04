var mongoose = require('mongoose');

var PatronSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  balance: Number,
  delinquent: Boolean,
  transactions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
});

PatronSchema.methods.addTransaction = function(callback) {
  this.transactions.push({date: "", amount: 6.33, type: "debit"});
  this.save(callback);
};

mongoose.model('Patron', PatronSchema);
