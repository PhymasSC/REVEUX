const User = require("./../models/user");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	User.findOne({ email: req.body.email }, function (err, user) {
		if (user === null) return res.redirect("/login");
		if (err) throw err;

		// test a matching password
		user.comparePassword(req.body.password, function (err, isMatch) {
			if (err) throw err;
			if (isMatch) return res.redirect("/");
			res.redirect("/login");
		});
	});
});

module.exports = router;
