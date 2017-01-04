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
    if (response.data.error_code === "None"){
       return response.data.lig_men;
    }else {
       throw new Error(response.data.error_code);
    }
  });
},

prepareReceptor: function (receptorName) {
  var encodedReceptorName = encodeURIComponent(receptorName);
  var authServerUrl = `${DRUGDESIGN_URL}preparereceptor/${encodedReceptorName}`;

  return axios.post(authServerUrl, { receptor: receptorName}, config)
.then(function(response){
  if (response.data.errorCode === "None"){
     return response.data.recepMen;
  }else {
     throw new Error(response.data.errorCode);
  }
});
}

}
