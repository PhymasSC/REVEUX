const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

let validateEmail = function (email) {
	let re = /^[a-zA-Z0-9_.-]+@.+\.(com|my|sg|jp|id|th|vn|kr|hk|tw|mm)$/;
	return re.test(email);
};

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
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
		],
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: Date.now
	}
});

// Middleware
userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
	next();
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return callback(err);
		callback(null, isMatch);
	});
};

module.exports = mongoose.model("User", userSchema);
