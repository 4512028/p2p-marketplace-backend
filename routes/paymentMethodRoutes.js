const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/paymentMethodController');
const authController = require('./../controllers/authController');

router.get('/paymentMethod-list', paymentMethodController.listMethods);


// Protect all routes after this middleware
router.use(authController.protect);
router.post('/add-paymentMethod', paymentMethodController.createMethods);



// Only admin have permission to access for the below APIs
// router.use(authController.restrictTo('admin'));


module.exports = router;
