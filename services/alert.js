

/**
 * @param {Iterable | string} arg
 * */
const print = (...arg) => {
  // eslint-disable-next-line no-console
  console.log('DEVELOPER ALERT:', ...arg);
};


/**
 * @param {Iterable | string} arg
 * */
const warning = (...arg) => {
  // eslint-disable-next-line no-console
  console.log('DEVELOPER WARNING:', ...arg);
};


module.exports = {
  print,
  warning,
};
