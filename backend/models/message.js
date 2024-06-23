const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	from: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	to: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	text: {
		type: String,
		required: [true, 'Please enter your message'],
		minlength: [1, 'Your message must be longer than 1 character(s)'],
	},
	createAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Message', messageSchema);