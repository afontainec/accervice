const SessionStorage = require('./sessionStorage');

class $Window {

  constructor() {
    this.sessionStorage = new SessionStorage();
    this.isClosed = false;
    this.windowIsIE = false;
    this.openingUrl = '';
    this.location = {};
  }

  isIE() {
    return this.windowIsIE;
  }

  close() {
    this.isClosed = true;
  }

  open(url) {
    this.openingUrl = url;
  }

  // eslint-disable-next-line class-methods-use-this
  btoa(data) {
    return Buffer.from(data).toString('base64');
  }

}

const $window = new $Window();

module.exports = $window;
