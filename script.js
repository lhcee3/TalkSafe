function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptionKey = document.getElementById('encryptionKey').value;

    if (!inputText || !encryptionKey) {
        alert('Please enter text and encryption key.');
        return;
    }

    const encryptedText = simpleEncrypt(inputText, encryptionKey);
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptionKey = document.getElementById('encryptionKey').value;

    if (!inputText || !encryptionKey) {
        alert('Please enter text and encryption key.');
        return;
    }

    const decryptedText = simpleDecrypt(inputText, encryptionKey);
    document.getElementById('outputText').value = decryptedText;
}

function simpleEncrypt(text, key) {
    const keyHash = btoa(key);
    return btoa(unescape(encodeURIComponent(text + key))) + "|" + keyHash;
}

function simpleDecrypt(encryptedText, key) {
    const parts = encryptedText.split("|");
    
    if (parts.length !== 2) {
        alert('Invalid encrypted text format.');
        return '';
    }

    const actualEncryptedText = parts[0];
    const keyHash = parts[1];

    if (btoa(key) !== keyHash) {
        alert('Incorrect encryption key.');
        return '';
    }


   let decryptedPart = decodeURIComponent(escape(atob(actualEncryptedText)));
   if (decryptedPart.endsWith(key)) {
       return decryptedPart.substring(0, decryptedPart.length - key.length);
   } else {
       alert('Incorrect encryption key or corrupted data.');
       return '';
   }
}

let debounceTimer;
document.addEventListener('mousemove', () => {
  if (debounceTimer) {
      clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(changeBackgroundColor, 11); 
});

function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
//TalkSafe: Your trusted encryption solution. Safeguard sensitive communications with
// seamless encryption and decryption capabilities, ensuring the confidentiality and security of your valuable data.