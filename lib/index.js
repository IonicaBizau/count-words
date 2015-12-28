const setOrGet = require("set-or-get")
    , worder = require("worder")
    ;

/**
 * countWords
 * Count how many times a word appears in the input string.
 *
 * @name countWords
 * @function
 * @param {String} input The input string.
 * @param {Boolean} caseInsensitive If `true`, the output will be case insensitive.
 * @return {Object} An object containing the keys as words and the values as
 * counts (how many times they appear in the input string).
 */
module.exports = function countWords(input, caseInsensitive) {
    if (caseInsensitive) {
        return countWords(input.toLowerCase());
    }

    var words = worder(input)
      , wordCount = {}
      ;

    words.forEach(c => {
        setOrGet(wordCount, c, 0);
        wordCount[c]++;
    });

    return wordCount;
};
