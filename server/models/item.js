const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
	{
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "product"
		},
		amount: {
			type: Number,
			validate: {
				validator: num => num > 0,
				message: prop => "Amount of item must be greater than 0."
			}
		},
		modifiedOn: {
			type: Date,
			default: Date.now
		},
		createdAt: {
			type: Date,
			default: Date.now
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
