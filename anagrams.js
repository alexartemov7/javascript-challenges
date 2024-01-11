/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let str1Letters = {};
    let str2Letters = {};
    for (let i = 0; i < str1.length; i++){
        let letter = str1[i];
        if (letter in str1Letters){
            str1Letters[letter] += 1;
        } else {
            str1Letters[letter] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++){
        let letter = str2[i];
        if (letter in str2Letters){
            str2Letters[letter] += 1;
        } else {
            str2Letters[letter] = 1;
        }
    }
    for (let letter in str1Letters){
        if (str1Letters[letter] !== str2Letters[letter]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
