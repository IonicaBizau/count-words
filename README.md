# count-words [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/count-words.svg)](https://www.npmjs.com/package/count-words) [![Downloads](https://img.shields.io/npm/dt/count-words.svg)](https://www.npmjs.com/package/count-words) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Count how many times words appear in the input string.

## Installation

```sh
$ npm i --save count-words
```

## Example

```js
const countWords = require("count-words");

console.log(countWords("Home, sweet, home!"));
// => { Home: 1, sweet: 1, home: 1 }

console.log(countWords("Home, sweet, home!", true));
// => { home: 2, sweet: 1 }
```

## Documentation

### `countWords(input, caseInsensitive)`
Count how many times a word appears in the input string.

#### Params
- **String** `input`: The input string.
- **Boolean** `caseInsensitive`: If `true`, the output will be case insensitive.

#### Return
- **Object** An object containing the keys as words and the values as counts (how many times they appear in the input string).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`count-words-array`](https://github.com/IonicaBizau/count-words-array#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md