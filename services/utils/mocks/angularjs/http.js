const requestify = require('requestify');

let host = '';

const setHost = (input) => {
  host = input;
};

const parseUrl = (url) => {
  return url && url.startsWith('/') ? host + url : url;
};

const get = async (url, config) => {
  url = parseUrl(url);
  const response = await requestify.get(url, config);
  const data = response.getBody();
  return { data };
};

const post = async (url, body) => {
  url = parseUrl(url);
  const response = await requestify.post(url, body);
  const data = response.getBody();
  return { data };
};

const put = async (url, body) => {
  url = parseUrl(url);
  const response = await requestify.put(url, body);
  const data = response.getBody();
  return { data };
};


module.exports = {
  setHost,
  parseUrl,
  get,
  post,
  put,
};
