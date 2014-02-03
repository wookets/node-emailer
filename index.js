
var config = require('config');
var nodemailer = require('nodemailer');

config.vet('emailer'); // make sure config exists
var transportType = config.vet('emailer:transport');
var transportOptions = config.get('emailer:settings');

var transport = nodemailer.createTransport(transportType, transportOptions);

var defaults = config.get('emailer:default');

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
