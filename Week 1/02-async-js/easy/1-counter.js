// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


setInterval(something,1000);

var counter = 1;

function something(){
      console.clear();
      console.log(counter);
      counter = counter + 1;
}