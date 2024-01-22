// Palindromes are words that are the same forward or backward. For example, 
// the words "noon" and "kayak" are a palindromes.
 
// Write a function to check if a lowercased string of letters is a palindrome. 
// If the word is palindrome, return true. If it isn't, return false.

// Example input: "motorbike"
// Example output: false

// Example input: "rotator" 
// Example output: true
// */

function isPalindrome(str){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed === str;
}

console.log(isPalindrome("abba"));