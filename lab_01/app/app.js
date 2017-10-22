const http = require('http')
const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('views/images'))

app.get('/', (request, response) => {
	response.render('home')
})

app.listen(port, (err) => {
	if (err) {
		return console.log('Something bad happened', err)
	}
	console.log('Server is listening on ' + port)	
})
