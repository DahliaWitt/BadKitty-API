
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , favicon = require('express-favicon')
  , logger = require('morgan')
  , bodyParser = require('body-parser');


var app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(favicon('favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  //app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;
