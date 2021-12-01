const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./routes/product.js");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	let variableA = "123";

<<<<<<< HEAD
	res.render("about-us", { variableA: variableA });
=======
	res.render("index", { variableA: variableA });
>>>>>>> 341915cf133c88eace7febf191845d24fd5b2341
});

app.use("/product", productRouter);
app.listen(5000);
