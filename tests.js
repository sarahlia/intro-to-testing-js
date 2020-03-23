// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
});

//
// const randomPositiveNumber = Math.ceil(Math.random() * 100);
// const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive(5)).toBe('boolean');
        expect(typeof isFive("Bob")).toBe('boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when the input passed is the numeric string "5".', function() {
        expect(isFive("5")).toBe(true);
    });
    // it('should return true when the input is the numeric string "' + randomPositiveNumber + '".', function() {
    //     expect(isString(String(randomPositiveNumber))).toBe(true);
    // });
    // it('should return true when the input is the numeric string "' + randomNegativeNumber + '".', function() {
    //     expect(isString(String(randomNegativeNumber))).toBe(true);
    // });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isEven(6)).toBe('boolean');
        expect(typeof isEven("Bob")).toBe('boolean');
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed a string like "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed the boolean value ' + true, function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed the boolean value ' + false, function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});
