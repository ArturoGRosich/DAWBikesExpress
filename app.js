const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const businessRoutes = require('./routes/business');
const bikeTypesRoutes = require('./routes/bikeTypes');
const bikeIdentificationsRoutes = require('./routes/bikeIdentifications');
const bikeModelsRoutes = require('./routes/bikeModels');
const availabilityRoutes = require('./routes/availability');

const app = express();
app.use(bodyParser.json());

//import routes
app.use('/business', businessRoutes);
app.use('/bikeTypes', bikeTypesRoutes);
app.use('/bikeIdentifications', bikeIdentificationsRoutes);
app.use('/bikeModels', bikeModelsRoutes);
app.use('/', require('./routes/bookings'));
app.use('/availability', availabilityRoutes);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//return index
app.use('/', require('./routes/index'));
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
