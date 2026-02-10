const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  email: {
    type: String,
    required: true
  },

  productName: String,
  site: String,
  price: String,
  originalPrice: String,
  discount: String,
  image: String,
  orderLink: String

}, { timestamps: true });

module.exports = mongoose.model("Purchase", purchaseSchema);