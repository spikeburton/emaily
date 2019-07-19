const router = require('express').Router();
const passport = require('passport');

// module.exports = app => {
//   app.get(
//     '/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] })
//   );

//   app.get(
//     '/auth/google/callback',
//     passport.authenticate('google'),
//     (req, res) => {
//       res.redirect('/surveys');
//     }
//   );

//   app.get('/auth/current_user', (req, res) => {
//     res.send(req.user);
//   });
// };

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/surveys');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
