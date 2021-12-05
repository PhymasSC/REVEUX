const express = require("express");
const stripe = require("stripe")(process.env.SECRET_KEY);
const router = express.Router();

const items = require("../json/items.json");
router.post("/", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: req.body.items.map(item => {
				let storeItem;
				items.forEach(itemInJson => {
					if (itemInJson.id == item.id) {
						storeItem = itemInJson;
					}
				});
				return {
					price_data: {
						currency: "myr",
						product_data: {
							name: storeItem.name
						},
						unit_amount: storeItem.priceInCents
					},
					quantity: item.quantity
				};
			}),
			submit_type: "pay",
			success_url: `http://localhost:5000/success.html`,
			cancel_url: `http://localhost:5000/cancel.html`
		});

		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;
