// Array choices
var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArr = lowerCase.split(" ");

var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArr = upperCase.split(" ");

var number = "1 2 3 4 5 6 7 8 9 0";
var numberArr = number.split(" ");

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ',', '<', '.', '>', '/', '?',];

// Prompt choices function
function promptChoices(){
  choiceArr = [];
  charLength = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Must choose between 8 and 128 characters");
    return false;
  }

  if(comfirm("Select 'OK' to add Lowercase Letters or 'Cancel' to skip")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if(comfirm("Select 'OK' to add Uppercase Letters or 'Cancel' to skip")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  
  if(comfirm("Select 'OK' to add Numbers or 'Cancel' to skip")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  
  if(comfirm("Select 'OK' to add Special Characters or 'Cancel' to skip")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  return true;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password from prompt choices
function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomised = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomised];
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
