
Sits atop nodemailer.

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/wookets/node-emailer.svg)](https://greenkeeper.io/)

In package.json, under dependencies, you can do...

```"emailer": "https://github.com/wookets/node-emailer/0.1.1"```

## Usage

```
var emailer = require('emailer');

emailer.send('SOME:URL');

emailer.send('SOME:URL', callback);


```

## config.json

```
{
  "emailer": {
    "transport": "SMTP",
    "settings": {
      "service": "SES",
      "auth": {
        "user": "MEOW",
        "pass": "PANTS"
      }
    },
    "default": {
      "to": "someone@email.com",
      "from": "someone.else@email.com",
      "subject": "Why me worry?"
    }
  }
}

```

## changelog

0.1.1 - Removed the requirement for wookets/node-config