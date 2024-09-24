// Follow along with the examples here

function doNothing() {};

function sayHello() {
    console.log("Hello!");
  };

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

  
function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

  
function sayHelloToSamip() {
    console.log("Hello, Samip!");
  } 

sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

  //console.log(firstName);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

say("Goodbye", "Julio");
say("Julio", "hello");

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));
