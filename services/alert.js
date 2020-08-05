/* eslint-disable no-console */


/**
 * @param {Iterable | string} arg
 * */
const print = (...arg) => {
  console.log('DEVELOPER ALERT:', ...arg);
};


/**
 * @param {Iterable | string} arg
 * */
const warning = (...arg) => {
  console.log('DEVELOPER WARNING:', ...arg);
};


module.exports = {
  print,
  warning,
};
