const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const messageLength = message.length;
    const keyLength = key.length;

    let result = "";

    for (let i = 0, j = 0; i < messageLength; i++) {
      const messageSymbol = message.charCodeAt(i);

      if (messageSymbol >= 65 && messageSymbol <= 90) {
        const keySymbol = key.charCodeAt(j % keyLength);
        const shift = keySymbol - 65;
        const encryptedSymbol = ((messageSymbol - 65 + shift) % 26) + 65;

        result += String.fromCharCode(encryptedSymbol);

        j++;
      } else {
        result += message.charAt(i);
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const messageLength = encryptedMessage.length;
    const keyLength = key.length;

    let result = "";

    for (let i = 0, j = 0; i < messageLength; i++) {
      const messageSymbol = encryptedMessage.charCodeAt(i);

      if (messageSymbol >= 65 && messageSymbol <= 90) {
        const keySymbol = key.charCodeAt(j % keyLength);
        const shift = keySymbol - 65;
        const decryptedSymbol = ((messageSymbol - 65 - shift + 26) % 26) + 65;

        result += String.fromCharCode(decryptedSymbol);

        j++;
      } else {
        result += encryptedMessage.charAt(i);
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};
