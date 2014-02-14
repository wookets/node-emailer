
var nodemailer = require('nodemailer');

var config = require(__dirname + '/../../config.json');
if (!config) throw Error('You need a config.json file in the root of your project.');
if (!config.emailer) throw Error('You need an emailer property in config.json.');

var transportType = config.emailer.transport;
var transportOptions = config.emailer.settings;

var transport = nodemailer.createTransport(transportType, transportOptions);

var defaults = config.emailer.default;

exports.send = function(email, callback) {
  if (callback == null) {
    callback = function(err) {};
  }
  if (email.to == null) {
    email.to = defaults.to;
  }
  if (email.from == null) {
    email.from = defaults.from;
  }
  if (email.subject == null) {
    email.subject = defaults.subject;
  }
  transport.sendMail(email, callback)
};
