var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
  date: String,
  amount: Number,
  type: String,
});

mongoose.model('Transaction', TransactionSchema);
