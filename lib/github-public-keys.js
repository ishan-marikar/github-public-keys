GithubPublicKeys = module.exports;
var unirest = require('unirest');

// https://api.github.com/search/users?q=<email here>
GithubPublicKeys.search = function(email, callback) {
  if (typeof email === 'string') {
    unirest.get('https://api.github.com/search/users?q=' + encodeURIComponent(email))
      .headers({
        'User-Agent': 'github-public-keys v0.1'
      })
      .end(function(response) {
        if (response.error) return callback(response.error, null);
        return callback(null, response.body);
      });
  } else {
    return callback(new Error('Not implemented yet.'));
  }
};


// https://api.github.com/users/<username>/keys
GithubPublicKeys.getPublicKeys = function(username, callback) {
  if (typeof username === 'string') {
    unirest.get('https://api.github.com/users/' + encodeURIComponent(username) + '/keys')
      .headers({
        'User-Agent': 'github-public-keys v0.1'
      })
      .end(function(response) {
        if (response.error) return callback(response.error, null);
        return callback(null, response.body);
      });
  }
};
