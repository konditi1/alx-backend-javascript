const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi(100, 20) returns The total is: 10', function () {
    // Set up a stub for the calculateNumber
    // property in the Utils module to
    // alter method behaviour.
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Setup a spy to monitor behaviour
    // of sendPaymentRequestToApi. Which
    // essentially is the call to console.log.
    const spy = sinon.spy(console, 'log');

    // Invoke method which is stubbed.
    sendPaymentRequestToApi(100, 20);

    // Ensure stubbed method is given the
    // valid arguments received from the
    // call to sendPaymentRequestToApi above.
    expect(stub.firstCall.args).to.eql(['SUM', 100, 20]);

    // Ensure calculateNumber in Utils module
    // produced valid stubbed (faked) result.
    expect(spy.calledWith('The total is: 10')).to.be.true;

    // Rstore original behaviour of stubbed
    // and spied methods.
    spy.restore();
    stub.restore();
  });
});
