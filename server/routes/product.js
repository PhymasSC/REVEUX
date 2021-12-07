const express = require("express");
const router = express.Router();

const items = require("../../client/json/items.json");

items.forEach(item => {
	item.price = new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2
	}).format(item.price);

	router.get(`/${item.name}`, (req, res) => {
		res.render(
			"product",
			{ product: item },
			{
				partials: {
					_navBar: `${__dirname}/../../client/views/_navbar.html`,
					_footer: `${__dirname}/../../client/views/_footer.html`
				}
			}
		);
	});
});

module.exports = router;
