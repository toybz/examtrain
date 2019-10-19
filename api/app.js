var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');
config = require('./config');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'examTrain', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}



let connection_str = `mongodb+srv://examtrain:1qaz2wsx3edc@cluster0-l1wy2.mongodb.net/examtrain?retryWrites=true&w=majority`;

//let connection_str = `mongodb://localhost/examtrain`


if(isProduction){
 // mongoose.connect(process.env.MONGODB_URI);
    mongoose.connect(connection_str)
} else {

  mongoose.connect(connection_str)
    mongoose.set('debug', true);
}
mongoose.set('minimize', false);




require('./models/User');
require('./models/Article');
require('./models/Comment');
require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 9955, function(){
  console.log('Listening on port ' + server.address().port);
});
