var express = require('express');
var fortune = require('./libs/fortune');

var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

// Do test if query has test=1
app.use(function (req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  });
});

// custome 404 page
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

// custome 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack);  
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port')
      + '\npress Ctrl-C to terminate.');
});
