const { Schema, model } = require("mongoose");

const coasterSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El nombre es obligatorio']
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
      minlength: [20, 'La descripción debe tener min. 20 caracteres']
    },
    length: {
      type: Number,
      required: [true, 'La longitud es obligatoria'],
    },
    inversions: {
      type: Number,
      required: [true, 'Las inversiones son obligatorias'],
    },
    imageUrl: {
      type: String,
      required: [true, 'La imagen es obligatoria'],
    }
  },
  {
    timestamps: true
  }
);

const Coaster = model("Coaster", coasterSchema)

module.exports = Coaster