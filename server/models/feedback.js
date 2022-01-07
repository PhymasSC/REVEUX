const mongoose = require("mongoose");

let validateEmail = function (email) {
	let re = /^[a-zA-Z0-9_.-]+@.+\.(com|my|sg|jp|id|th|vn|kr|hk|tw|mm)$/;
	return re.test(email);
};

const feedbackSchema = new mongoose.Schema({
	department: {
		type: String,
		required: "Department is required"
	},
	name: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: "Subject is required"
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		validate: [validateEmail, "Please fill in a valid email address"],
		match: [
			/^[a-zA-Z0-9_.-]+@.+\.(com|my|sg|jp|id|th|vn|kr|hk|tw|mm)$/,
			"Please fill in a valid email address"
		]
	},
	message: {
		type: String,
		required: "Message is required."
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("feedback", feedbackSchema);
