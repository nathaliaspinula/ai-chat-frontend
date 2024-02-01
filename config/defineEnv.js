const dotenv = require('dotenv');

module.exports = (environment) => {
  const env = dotenv.config({ path: `./env/.env.${environment}` }).parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[next] = JSON.stringify(env[next]);

    return prev;
  }, {});

  return envKeys;
}
