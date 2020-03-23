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


