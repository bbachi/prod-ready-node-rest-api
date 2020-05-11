/* eslint-disable no-console */
/* eslint-disable func-names */
const environment = process.env.ENVIRONMENT || 'development';

const Logger = function () {};

Logger.prototype.info = function (logText) {
  if (environment !== 'production') {
    console.log(`${new Date()}info:::::${logText}`);
  }
};

Logger.prototype.debug = function (logText) {
  if (environment !== 'production') {
    console.log(`${new Date()}debug:::::${logText}`);
  }
};

Logger.prototype.error = function (logText) {
  if (environment !== 'production') {
    console.log(`${new Date()}error:::::${logText}`);
  }
};

module.exports = new Logger();
