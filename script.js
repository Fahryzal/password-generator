const password = document.getElementById("myInput");
const passwordLength = document.querySelector('#fname');
const downloadButton = document.querySelector('#downloadbutton');

function myFunction() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function generatePassword(value) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const symbol = '!@#$%^&*()_+-=|]}{[;:<>,.?/~';

    const data = lowerAlphabet + upperAlphabet + number + symbol;
    let generator = '';
    for (let index = 0; index < value; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator;
}

function copied() {
    const copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Your password: " + copyText.value);
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    password.value += newPassword;
}

function savePassword() {
    document.title = password.value;
    downloadButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`));
    downloadButton.setAttribute('download', 'myPassword.txt');
    setTimeout(() => {
        alert('Berhasil didownload');
    }, 1000);
}
