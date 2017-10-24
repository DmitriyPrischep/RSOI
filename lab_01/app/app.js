var http = require('http');
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var port = 3000;

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('views/images'));

app.get('/', function (request, response) {
	response.render('home');
});

app.listen(port, function (err) {
	if (err) {
		return console.log('Something bad happened', err);
	}
	console.log('Server is listening on ' + port);
});
