const User = require('../models/user');
const catchAsyncErrors = require('./catch_async_errors');
const CustomError = require('../utils/custom_error');
const jsonwebtoken = require('jsonwebtoken');

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new CustomError('Login first to access this data', 401));
	}

	const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decoded.id);

	next();
});

exports.authorizeRoles = (...roles) => (req, res, next) => {
	if (!roles.includes(req.user.role)) {
		return next(new CustomError(`Role (${req.user.role}) is not allowed to access this resource`, 403));
	} else {
		next();
	}
}