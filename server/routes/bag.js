const Bag = require("./../models/bag");
const Item = require("./../models/item");
const Product = require("./../models/product");
const User = require("./../models/user");
const express = require("express");
const router = express.Router();

const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

router.get("/", async (req, res) => {
	let userBag = (
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
	).filter(bag => bag);

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
