
// Assignment Code
var generateBtn = document.querySelector("#generate");

// 
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8',"9",];
const specialCharacters = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
const uppercase = lowerCase.map(alphabet => {
  return alphabet.toUpperCase();
});

// My code
function checkLengthPrompt() {

  let passwordLength = 0;
 
  isValid = false;

  while (!isValid){
    if (!(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
      isValid = true;
    } else {
      let promptQuestion = prompt("Enter the length of the password:","Enter a number between 8 and 128");
      if(promptQuestion === null) {

        return 0;
      }
      passwordLength = Number(promptQuestion);
      
    }
  }
  return passwordLength;
};


/* Randomize array in-place using Durstenfeld shuffle algorithm */
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

function generatePassword() {
  let validPasswordCharacters = [];
  let password = '';

  let pwLength = checkLengthPrompt();
  if (pwLength === 0) {
    return;
  }
 
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

  console.log(pwLength, password.length);
  for (i = (password.length);i < pwLength;i++){
    password = password.concat(validPasswordCharacters[Math.floor(Math.random() * validPasswordCharacters.length)]);
  }
  console.log(password);
  password = shuffleArray(password);
  console.log(password, password.length);
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
