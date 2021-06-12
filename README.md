# Request Multiple URLs
This library fetches json data from an array of urls and return their contents in a promise.

## Common Usage
```
const requestMultipleUrls = require('request-multiple-urls');

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
Running the tests
```
npm test
```

## License
MIT
