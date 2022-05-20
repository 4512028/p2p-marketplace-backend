const Offer = require('../models/offerModel');
exports.createOffer = async ( req, res, next ) => {
	const inputs = req.body;
	const values = {
		user: req.user._id,
		cryptoCurrencyType: inputs.cryptoCurrencyType,
		tradingMethod: inputs.tradingMethod,
		paymentMethod: inputs.paymentMethod,
		preferredCurrency: inputs.preferredCurrency,
		tradingType: inputs.tradingType,
		tradeMin: inputs.tradeMin,
		tradeMax: inputs.tradeMax,
		offerMargin: inputs.offerMargin,
		offerTimeLimit: inputs.offerTimeLimit,
		fixedAmountTrade: inputs.fixedAmountTrade,
		offerTags: inputs.offerTags,
		offerLabel: inputs.offerLabel,
		offerTerms: inputs.offerTerms,
		tradeInstructions: inputs.tradeInstructions,
	};
	try {
		const offer = await Offer.create({...values});
		if ( offer ) {
			res.status(200).json({
				status: 'success',
				data: offer
			});
		}
		
	} catch ( error ) {
		next(error);
	}
};

exports.buyOffers = async ( req, res ) => {
	const offers = await Offer.find({preferredCurrency: 'PKR', tradingMethod: 'buy'}).populate('user name');
	const worldWideOffers = await Offer.find({preferredCurrency: {$ne: 'PKR'}, tradingMethod: 'buy'}).populate('user name');
	
	if ( offers ) {
		res.status(200).json({
			status: 'success',
			data: {offers, worldWideOffers}
		});
	}
};
exports.sellOffers = async ( req, res ) => {
	const offers = await Offer.find({preferredCurrency: 'PKR', tradingMethod: 'sell'}).populate('user name');
	const worldWideOffers = await Offer.find({preferredCurrency: {$ne: 'PKR'}, tradingMethod: 'sell'}).populate('user name');
	
	if ( offers ) {
		res.status(200).json({
			status: 'success',
			data: {offers, worldWideOffers}
		});
	}
};
