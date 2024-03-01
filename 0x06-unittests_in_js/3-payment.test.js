const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi(5, 1) returns The total is: 6', function () {
    // Set up a spy for the calculateNumber
    // property in the Utils module to
    // monitor its references.
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Invoke method which is spied.
    sendPaymentRequestToApi(5, 1);
    expect(spy.returnValues[0]).to.equal(6);
  });
});
