const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	let variableA = "123";

	res.render("index", { variableA: variableA });
});

app.listen(5000);
