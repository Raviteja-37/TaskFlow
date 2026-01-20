const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    avatar: { type: String, default: 'male1' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
