const Product = require("./../models/product");
const express = require("express");
const router = express.Router();
const categories = [
	"Hair-Care",
	"Skin-Care",
	"Body-Care",
	"Make-up",
	"Fragrance"
];

categories.forEach(category => {
	router.get(`/${category}`, async (req, res) => {
		const products = (await Product.find().then(data => data)).filter(
			data => data.category === category.toLowerCase()
		);
		res.render("products", {
			locals: {
				productList: products,
				name: req?.user?.name,
				messages: {
					msg: req.query?.msg,
					name: req.query?.name
				},
				breadcrumbs: category
			},
			partials: {
				_navBar: `${__dirname}/../../client/views/_navbar.html`,
				_footer: `${__dirname}/../../client/views/_footer.html`
			}
		});
	});
});

module.exports = router;
