var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gunsRouter = require('./routes/guns');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector')
var guns = require("./models/guns");
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guns', gunsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/guns', guns);
app.use('/resource',resourceRouter);

async function recreateDB(){
  // Delete everything
  await guns.deleteMany();
  let instance1 = new guns({guns_type:"pistel", guns_name:'blowgun',guns_cost:40});
  
  instance1.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
 
 let instance2 = new guns({guns_type:"shot gun", guns_name:'Gatling gun',guns_cost:50});
  
  instance2.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
 
 let instance3 = new guns({guns_type:"m416", guns_name:'air gun',guns_cost:45});
  
  instance3.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
}
 let reseed = true;
 if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
