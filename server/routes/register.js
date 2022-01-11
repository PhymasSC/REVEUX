const User = require("./../models/user");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
	// create a user a new user
	try {
		const user = new User({
			name: req.body.username,
			email: req.body.email,
			password: req.body.password[0]
		});
		// save user to database
		user.save(function (err) {
			if (err) {
				next(err);
			} else {
				req.login(user, function (err) {
					if (err) {
						next(err);
					}
					return res.redirect("/");
				});
			}
		});
	} catch (err) {
		res.redirect("/register");
	}
});

module.exports = router;
