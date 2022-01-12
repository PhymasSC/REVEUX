const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		},
		itemsId: {
			type: [mongoose.SchemaType.ObjectId],
			ref: "item"
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

module.exports = mongoose.model("Bag", bagSchema);
