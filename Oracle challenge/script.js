const inputField = document.querySelector(".presentacion__contenido__input");
const outputText = document.getElementById("outputText");
const placeholderImg = document.getElementById("placeholderImage");
const copyBtn = document.getElementById("copyButton");

function encrypt(text) {
    return text
        .replace(/e/g, 'echo')
        .replace(/i/g, 'india')
        .replace(/a/g, 'alpha')
        .replace(/o/g, 'oscar')
        .replace(/u/g, 'uniform');
}

function decrypt(text) {
    return text
        .replace(/echo/g, 'e')
        .replace(/india/g, 'i')
        .replace(/alpha/g, 'a')
        .replace(/oscar/g, 'o')
        .replace(/uniform/g, 'u');
}

function encryptText() {
    let text = inputField.value.trim();

    // Verifica si hay caracteres inválidos
    if (/[^a-z\s]/.test(text)) {
        outputText.textContent = 'El texto solo puede contener letras minúsculas y espacios.';
        placeholderImg.style.display = 'block';
        copyBtn.style.display = 'none';
        inputField.value = "";
        return;
    }

    const encryptedText = encrypt(text);

    if (text === '') {
        placeholderImg.style.display = 'block';
        outputText.textContent = 'No se encontró ningún mensaje';
        copyBtn.style.display = 'none';
    } else {
        placeholderImg.style.display = 'none';
        outputText.textContent = encryptedText;
        copyBtn.style.display = 'block';
    }

    inputField.value = "";
}

function decryptText() {
    let text = inputField.value.trim();

    // Verifica si hay caracteres inválidos
    if (/[^a-z\s]/.test(text)) {
        outputText.textContent = 'El texto solo puede contener letras minúsculas y espacios.';
        placeholderImg.style.display = 'block';
        copyBtn.style.display = 'none';
        inputField.value = "";
        return;
    }

    const decryptedText = decrypt(text);

    if (text === '') {
        placeholderImg.style.display = 'block';
        outputText.textContent = 'No se encontró ningún mensaje';
        copyBtn.style.display = 'none';
    } else {
        placeholderImg.style.display = 'none';
        outputText.textContent = decryptedText;
        copyBtn.style.display = 'block';
    }

    inputField.value = "";
}

function copyToClipboard() {
    const textToCopy = outputText.textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            outputText.textContent = 'No se encontró ningún mensaje';
            placeholderImg.style.display = 'block';
            copyBtn.style.display = 'none';
            alert("Texto copiado al portapapeles");

            inputField.value = textToCopy;
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
