/**
 * instagram-proxy
 */

// Dependencies
var request = require('request');


/**
 * Constructs an OAuth request object that can then be used with a token and
 * token secret to proxy request to Twitter.
 *
 * Parameters:
 *   {object} client Contains consumerKey & consumerSecret
 */




exports.get = function (req, res) {
  var url = "https://api.instagram.com/v1/users/367544383/media/recent/?client_id=ea469af425354320ab1b9c7e5bcd29d0";
  req.pipe(request(url)).pipe(res);
};