function isPalindrome(word) {
  return word == word.split('').reverse().join('');
}

console.log("Check: ", isPalindrome("racecar"));


/* 
  Similarly to the previous assignemnt. We split the word and then reverse the letters and rejoin them again.
  Then we do the check. If the orignal word is the same after reversing
  --> the word is Palindrome (true). Otherwise it is not (false).
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");cle
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
