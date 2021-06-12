const { expect } = require('chai');
const requestMultipleUrls = require('../index');

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
]

describe('Test Request Multiple URLs', () => {

  it('should return error when url is incorrect', async () => {
    try {
      await requestMultipleUrls([...urls, 'https://wrongurl.com']);
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }
  });

  it('should return type error when input is not an array', async () => {
    try{
      await requestMultipleUrls({});
    } catch (e) {
      expect(e).to.be.an.instanceOf(TypeError);
    }
  });

  it('should return empty response when input is an empty array', async () => {
    const content = await requestMultipleUrls([]);
    expect(content).to.be.an('Array');
    expect(content).to.have.length(0);
  });

  it('should return success response', async () => {
    const content = await requestMultipleUrls(urls);
    expect(content).to.be.an('Array');
    expect(content).to.have.length(3);
  });
})