const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('getPaymentTokenFromAPI', function () {
  it('return a resolved promise with an object', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data.data).to.equal('Successful response from the API');
        done();
      });
  });
});
