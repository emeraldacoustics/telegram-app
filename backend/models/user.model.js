const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name'],
		maxLength: [30, 'Your name cannot exceed 30 characters'],
		default: 'Telegram User'
	},
	email: {
		type: String,
		require: [true, 'Please enter your phone number'],
		unique: true,
		maxLength: [30, 'Your phone number cannot exceed 15 digits'],
		validate: [validator.isEmail, 'Please enter a valid phone number']
	},
	password: {
		type: String,
		required: [true, 'Please enter your password'],
		minlength: [6, 'Your password must be longer than 6 characters'],
		select: false
	},
	createAt: {
		type: Date,
		default: Date.now
	}


});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.getJwtToken = function () {
	return jsonwebtoken.sign(
		{ id: this._id },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRATION_PERIOD }
	);
}

module.exports = mongoose.model('User', userSchema);