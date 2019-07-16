const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
// require('./routes/authRoutes')(app);
app.use('/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
