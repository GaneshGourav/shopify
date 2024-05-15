const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = { AdminModel };
