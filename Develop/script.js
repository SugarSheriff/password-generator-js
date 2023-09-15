// Function to generate a random password
function generatePassword() {
  // Define character sets for password generation
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Prompt the user for password length
  let passwordLength = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return ''; // Return an empty string
  }

  // Prompt the user for character set inclusion
  let useLowercase = confirm('Include lowercase characters?');
  let useUppercase = confirm('Include uppercase characters?');
  let useNumeric = confirm('Include numeric characters?');
  let useSpecial = confirm('Include special characters?');

  // Validate character set selection
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert('At least one character set must be selected.');
    return ''; // Return an empty string
  }

  // Build the character set based on user selections
  let charset = '';
  if (useLowercase) charset += lowercaseChars;
  if (useUppercase) charset += uppercaseChars;
  if (useNumeric) charset += numericChars;
  if (useSpecial) charset += specialChars;

  // Generate the password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element and #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to write the generated password to the #password element
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
