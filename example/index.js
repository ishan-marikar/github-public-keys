var GithubPublicKeys = require('../index');

GithubPublicKeys.search('hello@imarikar.com', function(error, response) {
  response.items.forEach(function(profile) {
    console.log(profile);
    GithubPublicKeys.getPublicKeys(profile.login, function(error, keys) {
      console.log(keys);
    });
  });
});
