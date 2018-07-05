var assert = require('assert');
var dotnetPasswordHasher = require('../index.js');

const bestPassword = 'CorrectHorseBatteryStaple';
const validHash = 'ACPPWQepe6xsGKZC2DQQjll0fI0tpDgVjXKtIqApLaHY/6ZNJDhJ8z1og8hUx7IPSQ==';
const invalidHash = 'ACPPWQepe6xsGKZC2DQQjll0fI0tpDgVjXKtIqApLaHY/6ZNJDhJ8z1og8hUx7IPSE==';

describe('.NET PasswordHasher Class APIs for NodeJS', function() {
    it('should be true with correct hash', function() {
      assert.equal(dotnetPasswordHasher.VerifyHashedPassword(bestPassword, validHash), true);
    });
    it('should be false with a wrong hash', function() {
      assert.equal(dotnetPasswordHasher.VerifyHashedPassword(bestPassword, invalidHash), false);
    });
    it('should generate a valid hash', function() {
      let newHash = dotnetPasswordHasher.HashPassword(bestPassword);
      assert.equal(dotnetPasswordHasher.VerifyHashedPassword(bestPassword, newHash), true);
    });
});
