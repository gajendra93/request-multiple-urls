# Request Multiple URLs
[![GitHub issues](https://img.shields.io/github/issues/gajendra93/request-multiple-urls)](https://github.com/gajendra93/request-multiple-urls/issues)
[![GitHub forks](https://img.shields.io/github/forks/gajendra93/request-multiple-urls)](https://github.com/gajendra93/request-multiple-urls/network)
[![GitHub stars](https://img.shields.io/github/stars/gajendra93/request-multiple-urls)](https://github.com/gajendra93/request-multiple-urls/stargazers)
[![GitHub license](https://img.shields.io/github/license/gajendra93/request-multiple-urls)](https://github.com/gajendra93/request-multiple-urls/blob/main/LICENSE)

This library fetches json data from an array of urls and return their contents in a promise.

## Installation
```
npm i @gajendra93/request-multiple-urls
```

## Common Usage
```
const requestMultipleUrls = require('@gajendra93/request-multiple-urls');

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls).then(urlContent => {
  console.log(urlContent);
});
```

## Run Tests
Running the tests locally
```
npm test
```

## Dependencies
```
node-fetch 
```

## License
MIT
