const User = require("./../models/user");
const express = require("express");
const router = express.Router();


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
