const express = require("express");
const router = express.Router();

const items = require("../../client/json/items.json");
const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

items.forEach(item => {
	item.price = new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2
	}).format(item.price);

	router.get(`/${item.name}`, (req, res) => {
		res.render("product", {
			locals: {
				name: req?.user?.name,
				product: item,
				arithmetic: 3,
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
});

module.exports = router;
