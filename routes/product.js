const express = require("express");
const router = express.Router();

const items = require("../json/items.json");

items.forEach(item => {
	item.price = new Intl.NumberFormat(undefined, {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2
	}).format(item.price);
	router.get(`/${item.name}`, (req, res) => {
		res.render("product_page", { product: item });
	});
});

module.exports = router;
