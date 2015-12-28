const tester = require("tester")
    , countWords = require("../lib")
    ;

tester.describe("count words", test => {
    test.should("count words case sensitive", () => {
        test.expect(countWords("Home, sweet, home!")).toEqual({
            Home: 1
          , sweet: 1
          , home: 1
        });
    });
    test.should("count words case insensitive", () => {
        test.expect(countWords("Home, sweet, home!", true)).toEqual({
            home: 2
          , sweet: 1
        });
    });
});
