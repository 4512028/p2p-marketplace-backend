const {schema, paymentMethodModel} = require('../models/paymentMethodModel');
exports.createMethods = async ( req, res, next ) => {
	
	const inputs = req.body;
	try {
		const result = schema.validate(inputs);
		if(await paymentMethodModel.findOne({name:result.value.name})){
		return 	res.status(200).json({
				status: 'this payment method already exist;',
			});
		}
		if ( !result.hasOwnProperty('error') ) {
			const offer = await paymentMethodModel.create(result.value);
			if ( offer ) {
				return	res.status(200).json({
					status: 'success',
					data: offer
				});
			}
		} else {
			return	res.status(400).json({
				status: 'error',
				data: result.error
			});
		}
	} catch ( error ) {
		next(error);
	}
	
};

exports.listMethods = async ( req, res, next ) => {
	const methods = await paymentMethodModel.find({});
	if ( methods ) {
		res.status(200).json({
			status: 'success',
			data: methods
		});
	}
};

