var mongoose = require("mongoose");

var utxoSchema = new mongoose.Schema({
  txid: String,
  n: Number,
  address: String, // 1BW18n7MfpU35q4MTBSk8pse3XzQF8XvzT
  amount: Number,
  time: Number,
  updatedAt: Date
});

utxoSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

utxoSchema.index({
  address: 1
});

utxoSchema.index({
  txid: 1,
  n: 1
});

utxoSchema.index({
  time: 1
});

utxoSchema.index({
  time: -1
});

var utxo = mongoose.model("utxo", utxoSchema);
module.exports = utxo;
