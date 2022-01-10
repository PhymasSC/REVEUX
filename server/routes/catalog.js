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
	router.get(`/${category}`, (req, res) => {
		res.render("products", {
			locals: {
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
