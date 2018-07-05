# .NET PasswordHasher Class APIs for NodeJS

NodeJS package for hash/validate passwords using the .NET PasswordHasher algorithm.

### Usage



```js
var dotnetPasswordHasher = require('dotnet-password-hasher');

//#### Hash a password
let hash = dotnetPasswordHasher.HashPassword('CorrectHorseBatteryStaple');
// return string

//#### Verify a password
dotnetPasswordHasher.VerifyHashedPassword('CorrectHorseBatteryStaple', hash);
// return true false


```

### Install

`npm install --save dotnet-password-hasher`

### Test

`npm test`
