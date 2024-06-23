const Message = require('../models/message');
const catch_async_errors = require("../middlewares/catch_async_errors");
const User = require('../models/user');
const CustomError = require('../utils/custom_error');

exports.newMessage = catch_async_errors(async (req, res, next) => {
	const { to, text } = req.body;

	console.log(req.user._id);
	const dest = User.findById(to);
	if (!dest) {
		return next(new CustomError('Invalid email or Password', 401));
	}

	console.log(dest._id);

	const message = await Message.create({
		from: req.user._id,
		// to: dest._id,
		to,
		text
	});
	res.status(200).json({
		success: true
	});
});

exports.getMessages = catch_async_errors(async (req, res, next) => {
	const result = await Message.aggregate([
		{
			$match: {
				$or: [
					{ from: req.user._id },
					{ to: req.user._id }
				]
			}
		},
		{
			$sort: { createdAt: 1 }
		}
	]);

	res.status(200).json({
		status: true,
		result
	});
});