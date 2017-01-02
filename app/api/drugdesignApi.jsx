var axios = require('axios');
var querystring = require('querystring');

const DRUGDESIGN_URL = 'http://127.0.0.1:5000/';
var config = {
  headers: {'Content-Type': 'application/json'}
};

module.exports = {
  preparelibrary: function (libraryName) {
    var encodedLibraryName = encodeURIComponent(libraryName);
    var authServerUrl = `${DRUGDESIGN_URL}preparelibrary/${encodedLibraryName}`;

    return axios.post(authServerUrl, { ligandlib: libraryName}, config)
  .then(function(response){
    console.log('saved successfully')
  });
  }
}
