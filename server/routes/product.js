const Product = require("./../models/product");
const User = require("./../models/user");
const Bag = require("./../models/bag");
const Item = require("./../models/item");

const express = require("express");
const router = express.Router();

const NAVBAR_PARTIAL = `${__dirname}/../../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../../client/views/_footer.html`;

router.get(`/:productId`, async (req, res) => {
	// Get product
	const product = await Product.findOne({ _id: req.params.productId }).then(
		data => data
	);

	if (product === null) return res.redirect("/404");

	res.render("product", {
		locals: {
			name: req.user?.name,
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

router.post("/:productId/addToBag", async (req, res) => {
	const username = req.query.name;
	const productId = req.params.productId;

	console.log("TEST");
	// Get all required model

	try {
		const product = await Product.findOne({ _id: productId }).then(
			data => data
		);
		const user = await User.findOne({ name: username }).then(data => data);
		const bag = await Bag.findOne({ name: username });

		const userId = user._id;

		if (bag) {
			// If the user have an existing bag
			let itemIndex = (
				await bag
					.populate({
						path: "itemsId",
						model: Item,
						populate: [{ path: "productId", model: Product }]
					})
					.then(data => data)
			).itemsId.findIndex(item => item.productId.id === product.id);

			if (itemIndex > -1) {
				//product exists in the cart, update the quantity
				const itemId = (
					await bag
						.populate({
							path: "itemsId",
							model: Item,
							populate: [{ path: "productId", model: Product }]
						})
						.then(data => data)
				).itemsId.filter(item => item.productId.id === product.id);
				const item = await Item.findOne({ _id: itemId }).then(data => data);

				// Increment amount
				item.amount++;
				item.save();

				return res.redirect(`/product/${productId}`);
			} else {
				//product does not exists in cart, add new item
				const item = await Item.create({
					productId: product,
					amount: 1
				}).then(data => data);

				const bag = await Bag.findOne({ name: username }).then(data => data);

				bag.itemsId.push(item._id);
				await bag.save();
				return res.redirect(`/product/${productId}`);
			}
		} else {
			//no cart for user, create new cart
			const item = await Item.create({
				productId: product.id,
				amount: 1
			}).then(data => data);
			const newBag = await Bag.create({
				userId
			}).then(data => data);

			newBag.itemsId.push(item._id);
			await newBag.save();
			return res.redirect(`/product/${productId}`);
		}
	} catch (e) {
		return res.redirect("/login");
	}
});
module.exports = router;
