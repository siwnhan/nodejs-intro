const path = require('path');
const express = require('express');  
const app = express();    
const port = 3000;   
const morgan = require('morgan');
const handlebars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs',handlebars({
	extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

const route = require('./routers')

route(app);

app.listen(port, () => {   
	console.log(`Example app listening at http://localhost:${port}`);
});