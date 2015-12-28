const countWords = require("../lib");

console.log(countWords("Home, sweet, home!"));
// => { Home: 1, sweet: 1, home: 1 }

console.log(countWords("Home, sweet, home!", true));
// => { home: 2, sweet: 1 }
