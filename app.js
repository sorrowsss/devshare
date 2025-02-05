var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var fs = require('fs');



var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

require('./passport');
var config = require('./config');

var indexRoute = require('./routes/index');
var authRoute = require('./routes/auth');
var taskRoute = require('./routes/task');




// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ramzii:MQd4dkunNgVdDa9z@cluster0.yfctp.mongodb.net/devshare?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// mongoose.Promise = global.Promise;

// const uri ='mongodb+srv://ramzii:MQd4dkunNgVdDa9z@cluster0.yfctp.mongodb.net/devshare?retryWrites=true&w=majority';
// // Prints "MongoError: bad auth Authentication failed."
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useMongoClient:true,
//   serverSelectionTimeoutMS: 5000
// }).catch(err => console.log(err.reason));




global.User = require('./models/user');
global.Task = require('./models/task');

mongoose.connect(config.db);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());
app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
});

app.use('/', indexRoute);
app.use('/', authRoute);
app.use('/', taskRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
