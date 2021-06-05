const User = require("../models/user");
const JWT = require("jsonwebtoken");
const signToken = (userId) => {
	try {
		return JWT.sign({ _id: userId }, process.env.JWT_SECRET);
	} catch (e) {
		console.log(e);
	}
};
exports.signupUser = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(400).json({
				success: false,
				error: "This email is already in used try again",
			});
		}
		const newUser = new User(req.body);
		const { firstname, lastname, email, role } = newUser;

		//to save this
		const data = await newUser.save();
		const token = signToken(data._id);
		res.cookie("auth_token", token, {
			httpOnly: true,
		});
		console.log(data._id);
		res
			.status(201)
			.json({ success: true, user: { firstname, lastname, email, role } });
	} catch (error) {
		res
			.status(500)
			.json({ sucesss: false, error: "error occor", errordata: error });
	}
};
