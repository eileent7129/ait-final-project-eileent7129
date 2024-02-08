function greet(name) {
    console.log(`Hello, ${name}!`);
}
//console.log(greet.name); // Accessing the "name" property of a function is valid.

const arr = [1,2,3];
// console.log("pop property for arr: ", arr.hasOwnProperty("pop")); //false
// console.log("pop property for Array.prototype: ", Array.prototype.hasOwnProperty("pop")); // true

function CustomObject() {
    this.customProperty = "Hello";
  }
  const customInstance = new CustomObject();
  console.log(customInstance.hasOwnProperty("customProperty")); // true, customProperty is an "own" property of customInstance


// const str = "Hello, World";
// console.log("str: ",str.hasOwnProperty("length")); // true, because "length" is an "own" property of the string
