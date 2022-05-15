// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring the arrays of different types of password characters
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8',"9",];
const specialCharacters = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
// Using the map function to convert the characters in the lowerCase array to upper case characters
const uppercase = lowerCase.map(alphabet => {
  return alphabet.toUpperCase();
});

// My code
function checkLengthPrompt() {

  // Declaring password length and the isValid flag 
  let passwordLength = 0; 
  let isValid = false;

  // While the user does not type a valid length, keep prompting 
  while (!isValid){
    if (!(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
      isValid = true;
    } else {
      let promptQuestion = prompt("Enter the length of the password:","Enter a number between 8 and 128");
      // Checking if the user clicked the Cancel button
      if(promptQuestion === null) {
        return 0;
      }
      passwordLength = Number(promptQuestion);      
    }
  }
  // Returning the password length given by the user
  return passwordLength;
};

// Randomize array in-place using Durstenfeld shuffle algorithm - converting the string to an array because strings are immutable
function shuffleArray(str) {
  let array = str.split('');
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.join('');
}

// Generating the password after obtaining a valid password length from the user
function generatePassword() {

  // Declaring the valid password characters array and an empty password string
  let validPasswordCharacters = [];
  let password = '';

  // If the password length was zero, we need to stop the password generation process
  let pwLength = checkLengthPrompt();
  if (pwLength === 0) {
    return 0;
  }
 
  // Getting the users preference for the password
  let confirmNumbers = confirm("Do you want to include numbers in your password?");
  let confirmSpecialCharacters = confirm("Do you want to include special characters in your password?");
  let confirmLower = confirm("Do you want to include lower case alphabets in your password?");
  let confirmUpper = confirm("Do you want to include upper case alphabets in your password?");  


  // Based on the user's prefernce we are generating the array of valid password characters and to ensure that the password contains at least one character of each of the criterias given by the user, we set one character each of the selected preference initially

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
  
  // For the rest of the password length, we select random characters from the valid password array
  for (i = (password.length); i < pwLength; i++) {
    password = password.concat(validPasswordCharacters[Math.floor(Math.random() * validPasswordCharacters.length)]);
  }
  
  // Because we have initially hardcoded the first few characters to ensure the user's preference, we are shuffling the password generated till now to make it more secure
  password = shuffleArray(password); 

  // Returning the password generated finally
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
