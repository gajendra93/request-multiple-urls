const fetch = require('node-fetch');

// Checking the response status
const checkResponseStatus = (res) => {
  if(res.ok)
    return Promise.resolve(res.json());
  else
    return Promise.reject(new Error(`${res.statusText} -> ${res.url}`));
};

// Retrieve data from the input urls
const retrieveData = (urls) => Promise.all(urls.map(url => 
  fetch(url)
    .then(checkResponseStatus)
    .catch(err => {
      console.log(err.message)
      return Promise.reject(err)
    })
));

module.exports = retrieveData;