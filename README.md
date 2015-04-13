# [angular-base64][![Build Status](https://travis-ci.org/xelita/angular-base64.png?branch=master)](https://travis-ci.org/xelita/angular-base64)

Base64 encoding and decoding service for AngularJS applications.

## Install

### Using Bower

``` bash
```

### Using NPM

``` bash
```

## Quick start

+ Include angularBase64.js in your application.

```html
<script src="js/angularBase64.js"></script>
```

+ Add the module `base64Module` as a dependency to your app module:

```javascript
var myapp = angular.module('myapp', ['base64Module']);
```

+ Use the base64Service as dependency and call base64Service API:

### Encoding to base64

```javascript

    base64Service.encode('this is a simple test');
};
```

### Decoding from base64

```javascript

    base64Service.decode('this is a simple test');
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
