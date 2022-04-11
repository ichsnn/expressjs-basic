# Built-in middleware

[_http://expressjs.com/en/guide/using-middleware.html#middleware.built-in_](http://expressjs.com/en/guide/using-middleware.html#middleware.built-in)

Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

Express has the following built-in middleware functions:

* express.static serves static assets such as HTML files, images, and so on.
* express.json parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
* express.urlencoded parses incoming requests with URL-encoded payloads. **NOTE: Available with Express 4.16.0+**
