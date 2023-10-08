import getFullResponseFromAPI from './1-promise';
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
