const Bag = require("./../models/bag");
const express = require("express");
const router = express.Router();

const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

router.get("/", (req, res) => {
	console.log("TEST");
	res.render("shoppingcart", {
		locals: {
			name: req?.user?.name,
			messages: {
				msg: req.query?.msg,
				name: req.query?.name
			}
		},
		partials: {
			_navBar: NAVBAR_PARTIAL,
			_footer: FOOTER_PARTIAL
		}
	});
});

module.exports = router;
