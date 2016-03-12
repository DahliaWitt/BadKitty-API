'use strict'

module.exports = function(app)
{
  app.use('/api/audio-stream', require('./api/audio-stream'));
  app.use('/api/stream-chunks', require('./api/stream-chunks'));
  app.use('/api/chunk-proxy', require('./api/chunk-proxy'));
  app.use('/api/twitter', require('./api/twitter'))
  app.get('/', function(req, res){
    res.render('index');
  })
};
