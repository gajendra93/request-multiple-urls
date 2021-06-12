const requestMultipleUrls = require('./index');

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
]

requestMultipleUrls(urls)
  .then(content => console.log(`Content => ${JSON.stringify(content)}`))
  .catch(err => console.log(`Error while requesting multiple urls: ${err.message}`));