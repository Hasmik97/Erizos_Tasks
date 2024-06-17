function myParseInt(str) {
    let result = 0;
    let sign = undefined;

    // Check sign
    if (str[0] === '-') {
        sign = -1; 
    } else if (str[0] === '+') {
        sign = 1;
    }

    // Loop through the chars
    for (let i = sign ? 1 : 0; i < str.length; i++) {
        let char = str[i];

        // Check if the character is a digit
        if (char >= '0' && char <= '9') {
            result = result * 10 + (char - '0');
        } else {
            // Break with NaN value as non number char is found
            return NaN;
        }
    }

    // Add the sign to the result number
    return sign ? sign * result : result;
}

// Testing
console.log(myParseInt("123") + 2);  // Output: 125
console.log(myParseInt("-123") + 2); // Output: -121
console.log(myParseInt("+123") + 2); // Output: 125
console.log(myParseInt("1a23") + 2); // Output: NaN
console.log(myParseInt("----123") + 2); // Output: NaN