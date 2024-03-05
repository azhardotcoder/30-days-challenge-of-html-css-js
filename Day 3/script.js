const passwordBox = document.getElementById("password");
const lenght = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()";

const allChars = upperCase + lowerCase + numbers + symbol;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * symbol.length)];
    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}
