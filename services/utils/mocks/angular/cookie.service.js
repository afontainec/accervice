class CookieService {


  constructor() {
    this.cookies = {};
  }

  get(key) {
    const entry = this.cookies[key];
    if (!entry) return undefined;
    const hasExpiration = entry.options && entry.options.expires;
    if (hasExpiration) {
      const expires = new Date(entry.options.expires).getTime();
      const now = new Date().getTime();
      if (expires < now) {
        delete this.cookies[key];
        return undefined;
      }
    }
    return entry.value;
  }


  put(key, value, options) {
    const entry = {
      value,
      options,
    };
    this.cookies[key] = entry;
  }

  remove(key) {
    delete this.cookies[key];
  }
}


module.exports = CookieService;
