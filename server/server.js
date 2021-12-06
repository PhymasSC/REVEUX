require("dotenv").config();

const fs = require("fs");
const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");

// routers
const productRouter = require("./routes/product.js");
const aboutUsRouter = require("./routes/about-us.js");
const contactRouter = require("./routes/contact.js");
const catalogRouter = require("./routes/catalog.js");
const checkoutRouter = require("./routes/checkout.js");

const port = process.env.PORT || 5000;

// configure
app.engine("html", es6Renderer);
app.set("views", "client/views");
app.set("view engine", "html");
app.use(express.static(__dirname + "/../client"));

const isFileExist = fname =>
	fs.existsSync(`${__dirname}/../client/views/${fname}.html`);

app.get("/", (req, res) => {
	res.render("index", {
		partials: {
			_navBar: `${__dirname}/../client/views/_navbar.html`,
			_footer: `${__dirname}/../client/views/_footer.html`
		}
	});
});

app.get("/:filename", (req, res) => {
	try {
		let file = req.params.filename.toString();
		if (!isFileExist(file)) return res.render("404");
		res.render(file, {
			partials: {
				_navBar: `${__dirname}/../client/views/_navbar.html`,
				_footer: `${__dirname}/../client/views/_footer.html`
			}
		});
	} catch (e) {
		console.error(e);
	}
});

// Establish routers
app.use("/product", productRouter);
app.use("/about-us", aboutUsRouter);
app.use("/contact-us", contactRouter);
app.use("/catalog", catalogRouter);
app.use("/checkout", checkoutRouter);

app.listen(port);
