
// Assignment Code
var generateBtn = document.querySelector("#generate");

// 
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8',"9",];
const specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const uppercase = lowerCase.map(alphabet => {
  return alphabet.toUpperCase();
});

// My code
function checkLengthPrompt() {
  let passwordLength = Number(prompt("Enter the length of the password:","Enter a number between 8 and 128"));

  isValid = false;

  while (!isValid){
    if (!(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
      isValid = true;
    } else {
      passwordLength = Number(prompt("Please enter a number between 8 and 128","Enter a valid number"));
    }
  }
  return passwordLength;
};

function generatePassword() {
  let validPasswordCharacters = [];
  let password = ''

  let pwLength = checkLengthPrompt();
 
  let confirmNumbers = confirm("Do you want to include numbers in your password?");
  let confirmSpecialCharacters = confirm("Do you want to include special characters in your password?");
  let confirmLower = confirm("Do you want to include lower case alphabets in your password?");
  let confirmUpper = confirm("Do you want to include upper case alphabets in your password?");  

  if (confirmNumbers) {
    validPasswordCharacters = validPasswordCharacters.concat(numbers);
    password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
     }

  if (confirmSpecialCharacters) {
    validPasswordCharacters = validPasswordCharacters.concat(specialCharacters);
    password = password.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
     }

  if (confirmLower) {
    validPasswordCharacters = validPasswordCharacters.concat(lowerCase);
    password = password.concat(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
     }

  if (confirmUpper) {
    validPasswordCharacters = validPasswordCharacters.concat(uppercase);
    password = password.concat(uppercase[Math.floor(Math.random() * uppercase.length)]);
     }

  

   return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



























// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
