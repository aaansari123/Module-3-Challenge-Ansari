// Assignment Code
var generateBtn = document.querySelector('#generate');
var spclChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nums = "0123456789"
var randList = "";


function generatePassword() {
  var password = '';
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
    //reset megalist to empty so that previous conditions dont carry over.
  randList = "";
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  var length = prompt("Enter a password length between 8 - 128 characters in length");
  if ((length <= 8 ) || (length >= 128)){
    alert("This is an invalid length. Try again");
    return;
  } else{
    var hasUpper = confirm("would you like upper case letters?");
    var hasLower = confirm("would you like lower case letters?");
    var hasSpc = confirm("would you like special characters?");
    var hasNums = confirm("would you like numbers?");

    if (!hasUpper && !hasLower && !hasNums && !hasSpc){
        alert("Please pick at least one type of character. Try again");
        return;
    }
    //checks if upper is required, adds one upper case letter, adds upper case to our full random list
    if(hasUpper){
        var randUpper = Math.floor(Math.random() * upperLetters.length);
        password = password.concat(upperLetters.charAt(randUpper));
        length--;
        randList += upperLetters;

    }
    //checks if lower is required, adds one lower case letter, adds lower case to our full random list

    if(hasLower){
        var randLower = Math.floor(Math.random() * lowerLetters.length);
        password = password.concat(lowerLetters.charAt(randLower));
        length--;
        randList += lowerLetters;

    }
    //checks if special is required, adds one special case letter, adds special case to our full random list
    if(hasSpc){
        var randSpc = Math.floor(Math.random() * spclChar.length);
        password = password.concat(spclChar.charAt(randSpc));
        length--;
        randList += spclChar;

    }
    //checks if numbers is required, adds number, adds numbers to our full random list
    if(hasNums){
        var randNum = Math.floor(Math.random() * nums.length);
        password = password.concat(nums.charAt(randNum));
        length--;
        randList += nums;

    }
    //fills out the rest of our password with the appropriate types of values from our megalist
    while (length > 0){
        length--;
        var randChar = Math.floor(Math.random() * randList.length)
        password = password.concat(randList.charAt(randChar));
        
    }
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
