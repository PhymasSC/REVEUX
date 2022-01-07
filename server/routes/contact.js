const Feedback = require("./../models/feedback");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log(feedback);
});

router.post("/", async (req, res) => {
	if (!req.body.terms) return;
	const feedback = new Feedback({
		department: req.body.department == 1 ? "Support" : "Sales",
		name: req.body.name,
		subject: req.body.subject,
		email: req.body.email,
		message: req.body.message
	});
	await feedback.save();
	console.log("Saved");
});
module.exports = router;
