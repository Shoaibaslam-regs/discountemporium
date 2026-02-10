const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  ip: { type: String },
  page: { type: String, default: "/" }
}, { timestamps: true });

module.exports = mongoose.model("Visit", visitSchema);
