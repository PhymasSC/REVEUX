const express = require("express");
const router = express.Router();
const categories = [
	"hair-care",
	"skin-care",
	"body-care",
	"make-up",
	"fragrance"
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
