/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let answer="";
  for(let i=0;i<str.length;i++){
    if(str[i]===' ' || str[i]===',' || str[i]==='?' || str[i]==='!' || str[i]==='.'){

    }else{
      answer+=str[i];
    }
  }

  answer=answer.toLowerCase();
  var splitString = answer.split(""); 
  var reverseArray = splitString.reverse(); 
  var check = reverseArray.join("");
  return check===answer;
}

module.exports = isPalindrome;
