const Bag = require("./../models/bag");
const Item = require("./../models/item");
const Product = require("./../models/product");
const User = require("./../models/user");
const express = require("express");
const { vary } = require("express/lib/response");
const router = express.Router();

const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

router.get("/", async (req, res) => {
	var userBag;
	try {
		userBag = (
			await Bag.find()
				.populate({
					path: "itemsId",
					model: Item,
					populate: [
						{
							path: "productId",
							model: Product
						}
					]
				})
				.populate({ path: "userId", model: User })
				.then(data => data)
		)
			// Take only the user's bag not everyone's
			.filter(bag => bag.userId.name === req.query.name);
	} catch (e) {}

	res.render("bag", {
		locals: {
			name: req.user?.name,
			messages: {
				msg: req.query?.msg,
				name: req.query?.name
			},
			bag: userBag
		},
		partials: {
			_navBar: NAVBAR_PARTIAL,
			_footer: FOOTER_PARTIAL
		}
	});
});

module.exports = router;
