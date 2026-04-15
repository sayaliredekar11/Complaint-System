const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({complaint: { type: String, required: true },
  description: String,
  date: String,
  type: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true });
const Complaint = mongoose.model("Complaint",listingSchema);
module.exports = Complaint;