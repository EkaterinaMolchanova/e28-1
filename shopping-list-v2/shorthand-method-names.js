// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#method_definitions

// Example demonstrating some object syntax shortcuts:
let max = 10;

let example = {
    // Two different syntaxes, same result:
    max: max,
    max,

    // Two different syntaxes, same result:
    sayHello: function () {
        alert('Hello');
    },

    sayHello() {
        alert('Hello');
    }
};

