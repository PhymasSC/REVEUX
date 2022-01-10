const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: Number,
	priceInCents: Number,
	description: {
		"skin concern": [String],
		formulation: String,
		age: String,
		ingredients: [String]
	},
	category: String,
	coverImg: String,
	img: String
});

module.exports = mongoose.model("products", productsSchema);
