const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');
const authController = require('./../controllers/authController');


router.get('/sell-offers', offerController.sellOffers);
router.get('/buy-offers', offerController.buyOffers);

// Protect all routes after this middleware
router.use(authController.protect);
router.post('/create-offer', offerController.createOffer);



// Only admin have permission to access for the below APIs
// router.use(authController.restrictTo('admin'));


module.exports = router;
