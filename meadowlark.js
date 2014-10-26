var express = require('express');

var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  var fortunes = [
    "Conquer your feats or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what oyu don't know.",
    "you will have a pleasant suprise.",
    "Whenever possible, keep it simple."
  ];
  var randomeFourtune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomeFourtune});
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
