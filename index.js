// 1
function capitalizeWords(str) {
    return str
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world!"));  

// 2
function containsSubstring(str, substr) {
    return str.includes(substr);
}

console.log(containsSubstring("Mehdiyevashumen", "men"));  
console.log(containsSubstring("Mehdiyevashumen", "sha"));  

// 3
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  

// 4
function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}

console.log(countVowels("hello world"));  

// 5
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("qulluq"));  
console.log(isPalindrome("hello"));   

// 6
function formatToDecimal(num, places) {
    return num.toFixed(places);
}

console.log(formatToDecimal(5.75759, 2));  

// 7
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 10));  

// 8
function numberToString(num) {
    return num.toString();
}

console.log(numberToString(123));  

// 9
function findMaxValue(arr) {
    return Math.max(...arr);
}

console.log(findMaxValue([3, 18, 56, 15]));  

// 10
function roundNumber(num) {
    return Math.round(num);
}

console.log(roundNumber(4.7)); 
