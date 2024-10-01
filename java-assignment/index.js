// function to calculate factorial
function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
    console.log("Factorial of 6: ",factorial(6));

    console.log("Factorial of 7: ",factorial(-7));

    // If a string is a palindrome or not

    function isPalindrome(str) {
        let cleanedStr = str.toLowerCase().replace(/[^a-z 0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
        let reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string
        return cleanedStr === reversedStr;
    }
    
    let word = "vine";
     console.log(`${word} is ${isPalindrome(word) ? '' : 'not '}a palindrome.`);