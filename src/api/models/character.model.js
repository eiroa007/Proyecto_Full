const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    actor: { type: String, required: true, trim: true },
    role: { type: String, required: false, trim: true }
  },
  {
    timestamps: true
  }
)
const Character = mongoose.model('character', CharacterSchema)

module.exports = Character
