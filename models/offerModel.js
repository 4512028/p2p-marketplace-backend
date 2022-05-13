const mongoose = require('mongoose');
const validator = require('validator');

const offerSchema = new mongoose.Schema({
	
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	cryptoCurrencyType: {
		type: String,
		enum: ['bitcoin', 'ethereum', 'USDT'],
		required: true
	},
	//buy or sale
	tradingMethod: {
		type: String,
		enum: ['buy', 'sale'],
		required: true
	},
	paymentMethod: {
		type: String,
		required: true
	},
	preferredCurrency: {
		type: String,
	},
	tradingType: {
		type: String,
		enum: ['fixedPrice', 'marketPrice']
	},
	tradeMin: {
		type: Number,
		required: true,
	},
	tradeMax: {
		type: Number,
		required: true,
	},
	offerMargin: {
		type: Number,
		required: true,
	},
	offerTimeLimit: {
		type: Number,
		required: true,
		max: 30,
		min: 5
	},
	fixedAmountTrade: {
		type: Array,
		default: []
	},
	isFixedAmountTrade: {
		type: Boolean,
		default: false
	},
	offerTags: {
		type: Array,
		default: [],
		require: true
	},
	offerLabel: {
		type: String,
		required: true,
	},
	offerTerms: {
		type: String,
		required: true,
	},
	tradeInstructions: {
		type: String,
		required: true,
	},
	requireVerificationID: {
		type: Boolean,
		default: false
	},
	requireVerificationName: {
		type: Boolean,
		default: false
	},
	createdAt: { type: Date, default: Date.now },
	
});

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
