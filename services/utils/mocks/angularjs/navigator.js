

class Navigator {

  constructor() {
    this.SAVED_OR_OPENED_BLOBs = {};
  }

  msSaveOrOpenBlob(file, filename) {
    this.SAVED_OR_OPENED_BLOBs[filename] = filename;
  }


}

module.exports = Navigator;
