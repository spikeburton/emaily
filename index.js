const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const app = express();

passport.use(new Strategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
