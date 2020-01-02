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
  const data = await requestify.get(url, config);
  return { data };
};

const post = async (url, body) => {
  url = parseUrl(url);
  const data = await requestify.post(url, body);
  return { data };
};

const put = async (url, body) => {
  url = parseUrl(url);
  const data = await requestify.put(url, body);
  return { data };
};


module.exports = {
  setHost,
  parseUrl,
  get,
  post,
  put,
};
