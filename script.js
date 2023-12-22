// Функція для перевірки введеного тексту на наявність цифр та символів
function validateInput(inputElement) {
    const inputValue = inputElement.value;
    if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/А-ЯҐЄІЇа-яґєії]/.test(inputValue)) {
        alert("Будь ласка, введіть тільки літери англійської мови. Символи та цифри не доступні для вводу.");
        inputElement.value = inputValue.replace(/[^a-zA-Z]/g, '');
    }
}

// Функція для шифрування тексту шифром Цезаря
function encode() {
    const text = document.getElementById('text').value;
    let key = parseInt(document.getElementById('key').value, 10);
    if (key < 1 || key > 30) {
        alert("Будь ласка, введіть ключ в межах від 1 до 30.");
        document.getElementById('key').value = '';
        return;
    }
    document.getElementById('result').innerText = caesarCipher(text, key);
}

// Функція для розшифрування тексту шифром Цезаря
function decode() {
    const text = document.getElementById('text').value;
    let key = parseInt(document.getElementById('key').value, 10);
    if (key < 1 || key > 30) {
        alert("Будь ласка, введіть ключ в межах від 1 до 30.");
        document.getElementById('key').value = '';
        return;
    }
    document.getElementById('result').innerText = caesarCipher(text, -key);
}

// открытие вики
function info() {
    window.open('https://en.wikipedia.org/wiki/Caesar_cipher', '_blank');
}
// clear
function clearFields() {
    document.getElementById('text').value = '';
    document.getElementById('key').value = '';
    document.getElementById('result').innerText = '';
}
//sdvig
function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        const charCode = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        return String.fromCharCode((charCode - offset + shift + 26) % 26 + offset);
    });
}
