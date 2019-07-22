const router = require('express').Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', (req, res) => {
  console.log('STRIPE');
});

module.exports = router;
