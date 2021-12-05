require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./routes/product.js");
const aboutUsRouter = require("./routes/about-us.js");
const contactRouter = require("./routes/contact.js");
const catalogRouter = require("./routes/catalog.js");
const checkoutRouter = require("./routes/checkout.js");
const port = process.env.PORT || 5000;

app.use(express.json())
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
	let variableA = "123";

	res.render("index", { variableA: variableA });
});

// Establish routers
app.use("/product", productRouter);
app.use("/about-us", aboutUsRouter);
app.use("/contact-us", contactRouter);
app.use("/catalog", catalogRouter);
app.use("/checkout", checkoutRouter);

app.listen(port);
