const Product = require("./../models/products");
const express = require("express");
const router = express.Router();

const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

function formatCurrency(currency, locale) {
	return new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: locale,
		minimumFractionDigits: 2
	}).format(currency);
}

router.get(`/*`, async (req, res) => {
	const id = req._parsedOriginalUrl?.pathname.substring(9);

	const product = await Product.findOne({ _id: id }).then(data => data);
	console.log(product);
	if (product === null) return res.redirect("/404");

	res.render("product", {
		locals: {
			name: req?.user?.name,
			product: product,
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
