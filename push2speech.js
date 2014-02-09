var config = require('./config');

var request = require('request');

exports.talk = function talk(words) {
  var options = {
    uri: 'https://pushtospeech.appspot.com/api/v1/speech',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    json: {
      'deviceid': config.push2speech,
      'text': words
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('TALK SUCCESS: ' + words);
    } else {
      console.log('TALK FAILED: ' + words);
    }
  });
}
