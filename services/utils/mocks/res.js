
class Res {

  constructor() {
  }

  render(path, attr) {
    this.renderingPath = path;
    this.renderingAttr = attr;
  }

  send(input) {
    this.sendingFile = input;
    this.sending = input;
  }

  status(statusToSend) {
    this.statusToSend = statusToSend;
    return this;
  }

  sendFile(file) {
    this.sendingFile = file;
  }

  redirect(path) {
    this.redirectingTo = path;
  }

  static generate() {
    return new Res();
  }
}


module.exports = Res;
