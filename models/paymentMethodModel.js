const mongoose = require('mongoose');
const Joi = require('joi');

const paymentMethodSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
	},
	isPopular: {
		type: Boolean,
		default: false
	},
	country: {
		type: String,
		required: true
	},
	
});

// options can be passed, e.g. {allErrors: true}

const schema = Joi.object().keys({
	name: Joi.string().required(),
	icon: Joi.string().uri({
		scheme: [
			'http',
			'https'
		]
	}),
	country: Joi.string().required(),
	isPopular: Joi.boolean()
});
const paymentMethodModel = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = {schema,paymentMethodModel};

