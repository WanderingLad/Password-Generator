// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var generatedPassword = "";

  var passwordLength = setLength();

  if (passwordLength === null)
  {
    return "Password cancelled";
  }
  else
  {
    var referenceString = setPassword();

    for(i = 0; i < passwordLength; i++){
    var addedChar = Math.floor(Math.random() * referenceString.length + 1);

    generatedPassword += referenceString.charAt(addedChar);

    console.log(i);
    }

    return generatedPassword;
  }
}

function setLength(){

  var referenceLength = window.prompt("Choose a password length: ");

  if(referenceLength === null)
  {
    return null;
  }

  while(referenceLength > 128 || referenceLength < 8)
  {
    referenceLength = window.prompt("Choose a password length between 8 and 128 characters: ");
  }

  return referenceLength;
}

function setPassword(){

  var referencePassword = "";

  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";

  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numericString = "0123456789";

  var specialString = "!@#$%^&*()?";

  var lowercaseBool = window.confirm("Do you want the password to include lowercase?");
  var uppercaseBool = window.confirm("Do you want the password to include uppercase?");
  var numericBool = window.confirm("Do you want the password to include numbers?");
  var specialBool = window.confirm("Do you want the password to include special characters?");

  while(lowercaseBool === false && uppercaseBool === false && numericBool === false && specialBool === false)
  {
    alert("please select at least one");

    lowercaseBool = window.confirm("Do you want the password to include lowercase?");
    uppercaseBool = window.confirm("Do you want the password to include uppercase?");
    numericBool = window.confirm("Do you want the password to include numbers?");
    specialBool = window.confirm("Do you want the password to include special characters?");
  }

  if(lowercaseBool === true)
  {
    referencePassword += lowercaseString;
  }
  if(uppercaseBool === true)
  {
    referencePassword += uppercaseString;
  }
  if(numericBool === true)
  {
    referencePassword += numericString;
  }
  if(specialBool === true)
  {
    referencePassword += specialString;
  }

  return referencePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
