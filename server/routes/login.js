const User = require("./../models/user");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const initializePassport = require("./../passport-config");
initializePassport(
	passport,
	name =>
		User.findOne({
			name: { $regex: new RegExp("^" + name.toLowerCase(), "i") }
		}).then(userdata => userdata),
	id => User.findOne({ _id: id }).then(userid => userid)
);

router.post(
	"/",
	function (req, res, next) {
		passport.authenticate("local", function (err, user, info) {
			if (err) {
				return next(err);
			}
			console.log(info);
			if (!user) {
				return res.redirect(`/login?msg=${info.msg}&name=${info.name}`);
			}
			req.logIn(user, function (err) {
				if (err) {
					return next(err);
				}
				return res.redirect("/");
			});
		})(req, res, next);
	}
);

module.exports = router;
