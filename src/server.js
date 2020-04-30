const express = require('express');
const expressHandlebars =  require('express-handlebars');
const app = express();
const path = require('path');
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHandlebars({
   layoutsDir: path.join(app.get('views'), 'layouts'),
   partialsDir: path.join(app.get('views'), 'partials'),
   defaultLayout: 'main',
   extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index.routes'));

//statics files
//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;