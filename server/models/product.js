const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: Number,
	priceInCents: Number,
	description: [mongoose.Schema.Types.Mixed],
	category: String,
	coverImg: String,
	img: String
});

module.exports = mongoose.model("Product", productSchema);
