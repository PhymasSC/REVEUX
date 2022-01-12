const Bag = require("./../models/bag");
const Item = require("./../models/item");
const Product = require("./../models/product");
const User = require("./../models/user");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// // This is a public sample test API key.
// // Don’t submit any personally identifiable information in requests made with this key.
// // Sign in to see your own test API key embedded in code samples.
// const stripe = require('stripe')('sk_test_CsnggH3iChIYjrFoue5y6M98');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));

router.post("/", async (req, res) => {
	const username = req.query.name;
	try {
		const bag = await Bag.findOne({ name: username })
			.populate({
				path: "itemsId",
				model: Item,
				populate: [{ path: "productId", model: Product }]
			})
			.then(data => data);

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: bag.itemsId.map(item => {
				return {
					price_data: {
						currency: "myr",
						product_data: {
							name: item.productId.name
						},
						unit_amount: item.productId.priceInCents
					},
					quantity: item.amount
				};
			}),
			submit_type: "pay",
			success_url: `${req.protocol}://${req.get("host")}/`,
			cancel_url: `${req.protocol}://${req.get("host")}/`
		});

		res.redirect(303, session.url);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;
