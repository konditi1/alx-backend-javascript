const getPaymentTokenFromAPI = (success) => {
    const promise= new Promise((resolve) => {
      if (success) return resolve({ data: 'Successful response from the API' });
    });
  
    return (promise);
  };
  
  module.exports = getPaymentTokenFromAPI;
