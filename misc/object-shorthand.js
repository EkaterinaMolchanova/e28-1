// Example demonstrating some JavaScript object shorthands

let max = 10;

let example = {
    // Shorthand property names
    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions
    // The following two property definitions are equivalent:
    max: max,
    max,

    // Shorthand method names
    // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#method_definitions
    // The following two property definitions are equivalent:
    sayHello: function () {
        alert('Hello');
    },

    sayHello() {
        alert('Hello');
    }
};