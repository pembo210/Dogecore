Dogecore coming soon..

Dogecore
=======

[![Build Status](https://travis-ci.org/bitpay/bitcore.svg?branch=master)](https://travis-ci.org/bitpay/bitcore)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore.svg)](https://coveralls.io/r/bitpay/bitcore)

A pure, powerful core for your Litecoin project.

Litecore is a complete, native interface to the Litecoin network, and provides the core functionality needed to develop
apps for Litecoin.

#Principles

Litecoin is a powerful new peer-to-peer platform for the next generation of financial and social technology.
The decentralized nature of the Litecoin network allows for highly resilient Litecoin infrastructure, and the developer
community needs reliable, open-source tools to implement Litecoin apps and services.

**Litecore unchains developers from fallible, centralized APIs, and provides the tools to interact with the real Litecoin network.**

#Get Started

Litecore runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

```
npm install Litecore
```

It is a collection of objects useful to Litecoin applications; class-like idioms are enabled via[Soop](https://github.com/bitpay/soop).
In most cases, a developer will require the object's class directly. For instance:

```javascript
var Litecore = require('Litecore');
var Address = Litecore.Address;
var Transaction = Litecore.Transaction;
var PeerManager = Litecore.PeerManager;
```

#Examples

Examples are provided [here](examples.md)
Build the examples by installing and running gulp:

```
npm install -g gulp
gulp
```

Javascript files available at [/examples](/examples) folder.


#Security

Please use at your own risk.

Litecore is still under heavy development and not quite ready for "drop-in" production use. If you find a security issue,
please email pembo210@gmail

#Contributing

Litecore needs some developer love. Please send pull requests for bug fixes, code optimization, and ideas for improvement.

#Browser support

## Building the browser bundle

To build Litecore full bundle for the browser (this is automatically executed after you run `npm install`):

```
node browser/build.js -a
```

This will generate a `browser/bundle.js` file which you can include in your HTML to use Litecore in the browser.

##Example browser usage

From example/simple.html

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="../browser/bundle.js"></script>
    <script>
      var Litecore = require('Litecore');
      var Address = Litecore.Address;
      var a = new Address('sgrHPw4aEPos8YJDNfefsUSjPYWc5fzpLE');
      console.log('sgrHPw4aEPos8YJDNfefsUSjPYWc5fzpLE is valid? '+a.isValid());
    </script>
  </body>
</html>
```

You can check a more complex usage example at examples/example.html.

## Generating a customized browser bundle

To build the main Litecore bundle, run:

```
node browser/build.js -m
```

To build all features into the Litecore bundle (which will lead to a large file size), run:

```
node browser/build.js -a
```

To generate a customized Litecore bundle, you can specify which submodules you want to include in it with the -s option:

```
node browser/build.js -s Transaction,Address
```

This will generate a `browser/bundle.js` containing only the Transaction and Address class, with all their dependencies.
Use this option if you are not using the whole Litecore library, to optimize the bundle size, script loading time, and general resource usage.

## Tests

Run tests in node:

```
mocha
```

Or generate tests in the browser:

```
grunt shell
```

And then open test/index.html in your browser.

To run the code coverage report:

```
npm run-script coverage
```

And then open coverage/lcov-report/index.html in your browser.

#License

**Bitcore Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).**

Copyright 2013-2014 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bitpay/bitcore/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
