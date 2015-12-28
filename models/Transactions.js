var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
  date: String,
  amount: Number,
  type: String,
  patron: {type: mongoose.Schema.Types.ObjectId, ref: 'Patron'}
});

mongoose.model('Transaction', TransactionSchema);
