// Assignment Code
var generateBtn = document.querySelector('#generate');
var spclChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "0123456789"

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  var length = prompt("Enter a password length between 8 - 128 characters in length");
  if ((length < 8 ) || (length > 128)){
    alert("This is an invalid length. Try again");
    return;
  } else{
    var hasUpper = confirm("would you like upper case letters?");
    var hasLower = confirm("would you like lower case letters?");
    var hasSpc = confirm("would you like special characters?");
    var hasNums = confirm("would you like numbers?");
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
