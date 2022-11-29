// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var choiceArr = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var uppperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];

function generatePassword(){
  console.log("The Generate Password button was clicked by the user.")

//promt for things like password length, cases, numbers, and characters



  return "placeholder"

}

// Write password to the #password input
function writePassword() {
  getPrompts();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //generate password based on user inpput
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomLetter = Math.floor(Math.random() * choiceArr.length); 
    password = password + choiceArr[randomLetter];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("How long do you want your password to be?"));

  if (confirm("Do you want lowercase letters included in your password?")){
      choiceArr = choiceArr.concat(lowerCaseArray);
  }

  if (confirm("Do you want uppercase letters included in your password?")){
    choiceArr = choiceArr.concat(uppperCaseArray);
  }

  if (confirm("Do you want special characters included in your password?")){
  choiceArr = choiceArr.concat(specialCharacterArray);
  }

  if (confirm("Do you want numbers included in your password?")){
  choiceArr = choiceArr.concat(numbersArray);
  }
  return true;
}