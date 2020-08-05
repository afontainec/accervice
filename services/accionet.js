const timezone = require('./accionet/timezone');
const alert = require('./alert');

/**
 * @param {Promise} promise: promise forced to be resolved
 * @param {boolean?} printAlert: whether alert mail is going to be sent to notify rejection
 * */
const resolveMeAlways = (promise, printAlert) => {
  return new Promise((resolve) => {
    promise.then((result) => {
      resolve(result);
    }).catch((error) => {
      if (printAlert) alert.print('Promise forced to be resolved', error);
      resolve({
        error,
      });
    });
  });
};


module.exports = {
  alert,
  timezone,
  resolveMeAlways,
};
