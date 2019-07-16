const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('access token: ', accessToken);
      // console.log('refresh token: ', refreshToken);
      // console.log('profile: ', profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record with given ID
          done(null, existingUser);
        } else {
          // create a new user since it does not exist
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
