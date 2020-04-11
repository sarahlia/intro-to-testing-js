// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if ((input === undefined) || (typeof input === "boolean") || (input === null) || (input === "") || (isNaN(input) === false) || (typeof input === "number") || (Array.isArray(input) === true)) {
        return "Hello, World!";
    }
        return "Hello, " + (input) + "!";
        // if (input === "Alex") {
        //     return "Hello, Alex!";
        // } else if (input === "Pat") {
        //     return "Hello, Pat!";
        // } else {
        //     return "Hello, Jane!";
}

function isFive(inp) {
    return parseInt(inp) === 5;
}

function isEven(inp) {
    return parseInt(inp) % 2 === 0;
}

function isVowel(inp) {
    // if (typeof inp === "string") {
    //     return true;
    // } else if (inp === "y") {
    //         return false;
    // } else
    // if (inp === "y") {
    //     return false;
    // }
    if (typeof inp === "string") {
        return inp.toLowerCase() === "a" || inp.toLowerCase() === "e" || inp.toLowerCase() === "i" || inp.toLowerCase() === "o" || inp.toLowerCase() === "u";
        // return true;
    } else {
        return false;
    }
}

function add(input1, input2) {
    return parseInt(input1) + parseInt(input2);
}
