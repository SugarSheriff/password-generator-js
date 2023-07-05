// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
	length: "",
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: ""
};

var characterTypes = function() {
// include lowercase letters prompt
	passwordCriteria.lowercase = window.prompt("Do you want to include lowercase characters? Answer yes or no.");
	passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
	if (passwordCriteria.lowercase === "yes") {
		window.alert("You have chosen to include lowercase characters.");
		passwordCriteria.lowercase = true;
	}

// include numeric characters prompt
	passwordCriteria.numeric = window.prompt("Do you want to include numeric characters? Answer yes or no.");
	passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
	if (passwordCriteria.numeric === "yes") {
		window.alert("You have chosen to include numeric characters.");
		passwordCriteria.numeric = true;
	}
	else if (passwordCriteria.numeric === "no") {
		window.alert("You have chosen not to include numeric characters.");
		passwordCriteria.numeric = false;
	}

// include uppercase characters prompt
passwordCriteria.uppercase = window.prompt("Do you want to include uppercase characters? Answer yes or no.");
passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
if (passwordCriteria.uppercase === "yes") {
  window.alert("You have chosen to include uppercase characters.");
  passwordCriteria.uppercase = true;
}
else if (passwordCriteria.uppercase === "no") {
  window.alert("You have chosen not to include uppercase characters.");
  passwordCriteria.uppercase = false;
}

// include special characters prompt
passwordCriteria.specialCharacters = window.prompt("Do you want to include special characters? Answer yes or no.");
passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
if (passwordCriteria.specialCharacters === "yes") {
  window.alert("You have chosen to include special characters.");
  passwordCriteria.specialCharacters = true;
}
else if (passwordCriteria.specialCharacters === "no") {
  window.alert("You have chosen not to include special characters.");
  passwordCriteria.specialCharacters = false;
}
if (passwordCriteria.lowercase === false && 
  passwordCriteria.uppercase === false && 
  passwordCriteria.numeric === false && 
  passwordCriteria.specialCharacters === false) {
  window.alert("You need to pick at least one character type.");
  characterTypes();
}
};

// prompt password generator
var generatePassword = function() {
	// prompt forpassword length
	passwordCriteria.length = window.prompt("Choose the length of the password (at least 8 characters and no more than 128).");
	// changes string from passwordLength prompt to an integer
	passwordCriteria.length = parseInt(passwordCriteria.length);
	// asks user to enter valid length
	if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
		window.alert("You did not enter a valid length. Please try again.");
		generatePassword();
	}
	else {
		window.alert("You have entered a length of " + passwordCriteria.length + ".");
	}

	window.alert("What character types do you want to use? Choose at least one.");

	characterTypes();

	window.alert("Generating password.");

	function makePassword() {
		var characters = "";
		if (passwordCriteria.lowercase === true) {
			characters = "abcdefghijklmnopqrstuvwxyz";
		}
		if (passwordCriteria.uppercase === true) {
			characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}
		if (passwordCriteria.numeric === true) {
			characters = characters + "0123456789";
		}
		if (passwordCriteria.specialCharacters === true) {
			characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
		}
		var result = "";
		var length = passwordCriteria.length;
		for (var i = 0, n = characters.length; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * n));
		}
		window.alert("Your new password is " + result);
		return result;
	}
	
	makePassword();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
