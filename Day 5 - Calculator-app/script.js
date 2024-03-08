const passwordBox = document.getElementById("result");

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}