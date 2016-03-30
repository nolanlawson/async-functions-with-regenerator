async-functions-with-regenerator
====

A "hello world" showing how to use `async`/`await` (async functions) with [Babel](http://babeljs.io/)
and [Regenerator](https://github.com/facebook/regenerator). Note in particular the
`.babelrc` file and the use of `require('regenerator/runtime')`.

Usage
---

Download the code, then run

    npm install
    npm start

It should print:

    hello world

Browser version
----

To run in a browser, run:

    npm run browser

This will build `index.js` using Browserify/Babelify and then open it in a browser, so you can verify that it works.

To see the built version, run:

    npm run build

This will create a `bundle.js` you can inspect. By my measurements, the total size after uglify+gzip is 2922 bytes.

Sample output
----

```js
function sayHello() {
  return regeneratorRuntime.async(function sayHello$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = console;
          _context.next = 3;
          return regeneratorRuntime.awrap(Promise.resolve('hello world'));

        case 3:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}
```
