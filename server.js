const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./routes/product.js");
const aboutUsRouter = require("./routes/about-us.js");
const contactRouter = require("./routes/contact.js");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	let variableA = "123";

	res.render("index", { variableA: variableA });
});

// Establish routers
app.use("/product", productRouter);
app.use("/about-us", aboutUsRouter);
app.use("/contact-us", contactRouter);

app.listen(5000);
