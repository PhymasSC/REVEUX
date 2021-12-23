const express = require("express");
const router = express.Router();

const items = require("../../client/json/items.json");

items.forEach(item => {
	item.price = new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2
	}).format(item.price);

	console.log(item);
	router.get(`/${item.name}`, (req, res) => {
		res.render("product", {
			locals: {
				product: item,
				features: [
					{
						dt: "Multi-line strings",
						dd: "Any new line characters inserted in the source are part of the template string."
					},
					{
						dt: "Expression interpolation",
						dd: "Template strings can contain placeholders. These are indicated by dollar sign and curly braces."
					}
				]
			},
			partials: {
				_navBar: `${__dirname}/../../client/views/_navbar.html`,
				_footer: `${__dirname}/../../client/views/_footer.html`
			}
		});
	});
});

module.exports = router;
