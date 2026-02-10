const mongoose = require("mongoose");

const redirectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  ip: { type: String },
  url: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Redirect", redirectSchema);
