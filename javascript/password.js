function generatePassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~";
  let length = document.getElementById("passwordLength").value;
  let charPool = lowercaseChars;

  if (document.getElementById("includeUppercase").checked){
    charPool += uppercaseChars;
  } 

  if (document.getElementById("includeNumbers").checked){
    charPool += numberChars;
  } 

  if (document.getElementById("includeSpecialChars").checked){
    charPool += specialChars;
  }

  let password = '';

  for(let i = 0; i <= length; i++){
    let randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }
  return password;
}