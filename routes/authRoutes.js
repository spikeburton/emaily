const router = require('express').Router();
const passport = require('passport');

// module.exports = app => {
//   app.get(
//     '/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] })
//   );

//   app.get('/auth/google/callback', passport.authenticate('google'));
// };

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
