const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./routes/product.js");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	let variableA = "123";

	res.render("index", { variableA: variableA });
});

app.get("/about-us", (req, res) => {
	res.render("about-us");
});

app.use("/product", productRouter);
app.listen(5000);
