require("dotenv").config();

// server configuration
const fs = require("fs");
const express = require("express");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const mongoose = require("mongoose");
const isFileExist = fname =>
	fs.existsSync(`${__dirname}/../client/views/${fname}.html`);

// routers
const productRouter = require("./routes/product.js");
const checkoutRouter = require("./routes/checkout.js");
const contactRouter = require("./routes/contact.js");
const catalogRouter = require("./routes/catalog.js");
const registerRouter = require("./routes/register.js");
const loginRouter = require("./routes/login.js");
const port = process.env.PORT || 5000;

// paths
const NAVBAR_PARTIAL = `${__dirname}/../client/views/_navbar.html`;
const FOOTER_PARTIAL = `${__dirname}/../client/views/_footer.html`;

// renderer object
const RENDER = {
	partials: {
		_navBar: NAVBAR_PARTIAL,
		_footer: FOOTER_PARTIAL
	}
};

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Database is connected successfully!");
});

// productModel.find().then(data => console.log(data));

// configure
app.engine("html", es6Renderer);
app.set("views", "client/views");
app.set("view engine", "html");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/../client"));

// Establish routers
app.use("/checkout", checkoutRouter);
app.use("/product", productRouter);
app.use("/catalog", catalogRouter);
app.use("/contact", contactRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
	res.render("index", RENDER);
});

app.get("/:filename", (req, res) => {
	try {
		let file = req.params.filename.toString().toLowerCase();
		if (!isFileExist(file)) return res.render("404", RENDER);
		if (file === "product" || file === "index") return res.redirect("/");
		res.render(file, RENDER);
	} catch (e) {
		console.error(e);
	}
});

app.listen(port);
