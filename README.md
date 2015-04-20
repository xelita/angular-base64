[![Bower version](https://badge.fury.io/bo/angular-base64.svg)](http://badge.fury.io/bo/angular-base64)
[![Build Status](https://travis-ci.org/xelita/angular-base64.png?branch=master)](https://travis-ci.org/xelita/angular-base64)
# [angular-base64]

Base64 encoding and decoding service for AngularJS applications.

IMPORTANT: This library relies to last browsers features for encoding and decoding strings to and from base 64: window.atob() and window.btoa(). To know if this library can be comptible with the version of the browser your are using: http://caniuse.com/#feat=atob-btoa

## Install

### Using Bower

``` bash
bower install angular-base64-codec
```

## Quick start

+ Include the library in your application.

```html
<script src="js/angular-base64-codec.js"></script>
```
or use the minified version:

```html
<script src="js/angular-base64-codec.min.js"></script>
```

+ Add the module `base64Module` as a dependency to your app module:

```javascript
var myapp = angular.module('myapp', ['base64Module']);
```

+ Use the base64Service as dependency and call base64Service API:

### Encoding to base64

```javascript
$scope.encode = function() {
    // return 'dGhpcyBpcyBhIHRlc3Q='
    base64Service.encode('this is a test');
};
```

### Decoding from base64

```javascript
$scope.decode = function() {
    // return 'this is a test'
    base64Service.decode('dGhpcyBpcyBhIHRlc3Q='); 
};
```

## Developers

Clone the repo, `git clone git://github.com/xelita/angular-base64.git`.
The project is tested with `jasmine` running on `karma`.

>
``` bash
$ npm install
$ bower install
$ npm test
```

## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 The Enlightened Developer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
