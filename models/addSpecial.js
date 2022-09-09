const mongoose = require("mongoose");
const pizzaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    isQuantity: {
      type: String,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Special = mongoose.model("special", pizzaSchema);
module.exports = Special;
