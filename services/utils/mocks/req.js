

let authenticated = false;
const headers = {
  'user-agent': 'UA',
};
const secure = false;

function isAuthenticated() {
  return authenticated;
}


function login(user) {
  authenticated = true;
  this.user = user;
}

function logout() {
  authenticated = false;
}

function setParam(key, value) {
  this.params = this.params || {};
  this.params[key] = value;
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
    setParam,
    setQuery,
    headers,
    secure,
  };
};


module.exports = {
  generate,
};
