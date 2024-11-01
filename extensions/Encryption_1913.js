// Name: Encryption
// ID: encryptionExtension
// Description: Encrypt and Decrypt Text using Crypto-js AES
// By: Cryptaur
// Licence: MIT

// Version V.1.0.0

const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
document.head.appendChild(script);

class EncryptionExtension {
  getInfo() {
    return {
      id: 'encryptionExtension',
      name: 'Encryption',
      color1: '#0B1913', 
      color2: '#0A1612',
      color3: '#091110',
      blocks: [
        {
          opcode: 'encryptText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'encrypt [TEXT] with key [KEY]',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello' },
            KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' }
          }
        },
        {
          opcode: 'decryptText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'decrypt [TEXT] with key [KEY]',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'EncryptedText' },
            KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'key' }
          }
        }
      ]
    };
  }

  encryptText(args) {
    const textToEncrypt = args.TEXT.toString();
    return CryptoJS.AES.encrypt(textToEncrypt, args.KEY).toString();
  }

  decryptText(args) {
    const bytes = CryptoJS.AES.decrypt(args.TEXT, args.KEY);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return isNaN(decryptedText) ? decryptedText : Number(decryptedText);
  }
}

Scratch.extensions.register(new EncryptionExtension());