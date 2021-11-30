const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

router.get('/contact-us', (req, res) => {
  res.render('contact-us');
})


module.exports = router;