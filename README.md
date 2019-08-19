# string-minify [![Build Status](https://travis-ci.org/soul-wish/string-minify.svg?branch=master)](https://travis-ci.org/soul-wish/string-minify)

> Simple string (file-content) minifier. This helper removes all extra whitespaces, tabs, newlines and trims the string. Please, do not blame me for this one-line module 😉

## Install

```
$ npm install --save string-minify
```

## Usage

```js
const minifier = require('string-minify');

const testString = `Hello world!
I    am   a string!    `;
const idealString = 'Hello world! I am a string!';

console.log(minifier(string) === idealString); // => true
```

## Related

- [grunt-file-minify](https://github.com/soul-wish/grunt-file-minify) - Grunt plugin for simple file minification

## License

MIT © [Sergey Lysenko](http://soulwish.info)
