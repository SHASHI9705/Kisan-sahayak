require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const path = require('path');

// Initialize app
const app = express();

// Set up EJS and middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // For parsing JSON data
app.use(express.static('public'));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const User = require('./models/User');

app.get('/', (req, res) => {
    res.render('welcome');
});

app.get('/home', (req, res) => {
    if (req.session.user) {
        console.log('User is logged in:', req.session.user);
        return res.render('home', { user: req.session.user });
    }
    console.log('User is not logged in');
    res.redirect('/');
});

app.use('/auth', authRoutes);

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.clearCookie('authToken');
        res.redirect('/');
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));