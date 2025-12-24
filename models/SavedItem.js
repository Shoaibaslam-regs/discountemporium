const mongoose = require("mongoose");

const savedItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: String, required: true },
  image: String,
  description: String,
  site: String,
  price: String,
  originalPrice: String,
  discount: String,
  orderLink: String,
}, { timestamps: true });

module.exports = mongoose.model("SavedItem", savedItemSchema);
