const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(require('./routes'));

//telling Mongoose which database we want to connect to.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`You are connected to localhost: ${PORT}`));
