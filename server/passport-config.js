const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByName, getUserById) {
	const authenticateUser = async (username, password, done) => {
		console.log(username);
		const user = await getUserByName(username);
		console.log(user);
		if (user === null)
			return done(null, false, { msg: "not_found", name: username });

		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, { msg: "wrong_password", name: username });
			}
		} catch (e) {
			return done(e);
		}
	};

	passport.use(
		new LocalStrategy({ usernameField: "username" }, authenticateUser)
	);
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser(async (id, done) => {
		console.log(id);
		console.log(await getUserById(id));
		return done(null, await getUserById(id));
	});
}

module.exports = initialize;
