var crypto = require('crypto');

var VerifyHashedPassword = (password, hash) => {
  let hashedPasswordBytes = new Buffer.from(hash, 'base64');
  let hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  let saltString = "";
  let storedSubKeyString = "";

  for (let i = 1; i < hashedPasswordBytes.length; i++) {
      if (i > 0 && i <= 16) {
          saltString += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f]
      }
      if (i > 0 && i > 16) {
          storedSubKeyString += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f];
      }
  }
  let bfPassword = Buffer.from(password, 'utf8' );
  let bfSaltString = Buffer.from(saltString, 'hex' );
  let nodeCrypto = crypto.pbkdf2Sync(bfPassword, bfSaltString, 1000, 256, 'sha1');
  let derivedKeyOctets = nodeCrypto.toString('hex').toUpperCase();

  return derivedKeyOctets.indexOf(storedSubKeyString) === 0
}


var HashPassword =  (password) => {
  let salt = crypto.randomBytes(16);
  let bytes = crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha1');
  let output = new Buffer.alloc(49);

  salt.copy(output, 1, 0, 16);
  bytes.copy(output, 17, 0, 32);

  return output.toString('base64');
}

module.exports = exports = {
  HashPassword: HashPassword,
  VerifyHashedPassword: VerifyHashedPassword
}
