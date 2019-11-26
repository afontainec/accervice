

let authenticated = false;
const headers = {
  'user-agent': 'UA',
  'x-forwarded-for': '10.5.50.1',
};
const secure = false;

function isAuthenticated() {
  return authenticated;
}


function login(user) {
  if (!user) return;
  authenticated = true;
  this.user = user;
}

function logout() {
  authenticated = false;
  this.user = undefined;
}

function setParam(key, value) {
  this.params = this.params || {};
  this.params[key] = value;
}

function setBody(key, value) {
  this.body = this.body || {};
  this.body[key] = value;
}

function setQuery(key, value) {
  this.query = this.query || {};
  this.query[key] = value;
}

const generate = () => {
  return {
    isAuthenticated,
    login,
    logout,
    setBody,
    setParam,
    setQuery,
    headers,
    secure,
  };
};


module.exports = {
  generate,
};
