const router = require('express').Router();

router.post('/', (req, res) => {
  console.log('STRIPE');
});

router.get('/', (req, res) => {
  console.log('STRIPE');
});

module.exports = router;
