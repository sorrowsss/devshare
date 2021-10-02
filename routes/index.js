var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);


router.get('/', function (req, res, next) {
  res.render('index', { title: 'DevShare - une plateforme de partage de code.' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'DevShare - une plateforme de partage de code.' });
});

router.route('/contact')
  .get(function (req, res, next) {
    res.render('contact', { title: 'DevShare - une plateforme de partage de code.' });
  })
  .post(function (req, res, next) {
    req.checkBody('name', 'Empty name').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('message', 'Empty message').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      res.render('contact', {
        title: 'DevShare - une plateforme de partage de code.',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    } else {
      var mailOptions = {
        from: 'DevShare <no-reply@DevShare.com>',
        to: 'DevShare7.help@gmail.com',
        subject: 'DevShare: Messages de utilisateurs 😽',
        text: req.body.message
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return console.log(error);
        }
        res.render('thank', { title: 'DevShare - une plateforme de partage de code' });
      });

    }
  });

module.exports = router;
