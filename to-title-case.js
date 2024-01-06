/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    word.slice()
    return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("scrimba"));

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    // split the string into an array of words
    let words = str.split(' ');
    // loop through the array of words
    for(let i = 0; i < words.length; i++){
        // capitalize every word
        words[i] = capitalizeWord(words[i]);
    }
    // return the new string
    return words.join(' ');
    
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));