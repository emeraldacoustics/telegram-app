// const User = require('../models/user');
const User = require('../models/user.model');
const catchAsyncErrors = require('../middlewares/catch_async_errors');
const CustomError = require('../utils/custom_error');
const sendToken = require('../utils/send_token');

// Register a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	const {name, email, password} = req.body;
	const user = await User.create({
		name,
		email,
		password
	});

	res.status(200).json({
		success: true
	});

	// sendToken(user, 200, res);
});

// Login User  =>  /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
	const { email, password } = req.body;

	// Checks if email and password is entered by user
	if (!email || !password) {
		return next(new CustomError('Please enter email & password', 400))
	}

	// Finding user in database
	const user = await User.findOne({ email }).select('+password')

	if (!user) {
		return next(new CustomError('Invalid email or Password', 401));
	}

	// Checks if password is correct or not
	const isPasswordMatched = await user.comparePassword(password);

	if (!isPasswordMatched) {
		return next(new CustomError('Invalid email or Password', 401));
	}

	sendToken(user, 200, res);
});

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	res.status(200).json({
		success: true,
		user
	});
});


// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password');

	// Check previous user password
	const isMatched = await user.comparePassword(req.body.oldPassword)
	if (!isMatched) {
		return next(new CustomError('Old password is incorrect'));
	}

	user.password = req.body.password;
	await user.save();

	sendToken(user, 200, res)
});


// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email
	}

	const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false
	})

	res.status(200).json({
		success: true
	})
});


// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
	res.cookie('token', null, {
		expires: new Date(Date.now()),
		httpOnly: true
	})

	res.status(200).json({
		success: true,
		message: 'Logged out'
	})
});

// Admin Routes

// Get all users   =>   /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
	const users = await User.find();

	res.status(200).json({
		success: true,
		users
	})
});


// Get user details   =>   /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new CustomError(`User does not found with id: ${req.params.id}`))
	}

	res.status(200).json({
		success: true,
		user
	})
});

// Update user profile   =>   /api/v1/admin/user/:id
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
		role: req.body.role
	}

	const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false
	});

	res.status(200).json({
		success: true
	})
});

// Delete user   =>   /api/v1/admin/user/:id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new CustomError(`User does not found with id: ${req.params.id}`))
	}

	await user.remove();

	res.status(200).json({
		success: true,
	})
});
