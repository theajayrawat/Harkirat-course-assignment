// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 1;

function counter2(){
      console.clear();
      console.log(counter);
      counter = counter + 1;
      setTimeout(counter2,1000);

}

setTimeout(counter2,1000);










































































