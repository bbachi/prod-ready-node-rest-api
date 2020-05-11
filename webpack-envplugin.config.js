const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

const ENVIRONMENT_VARIABLES = {
  ENVIRONMENT: 'development',
  PORT: '9000',
  GREETING_MESSAGE: 'API Running In Development Environment',
  API_WORKS_MESSAGE: 'Development API Works!!!',
  DB_USERNAME: 'dev username',
  DB_PASSWORD: 'dev password',
  DB_CONNECTION_STR: 'dev connection string',
};

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.EnvironmentPlugin(ENVIRONMENT_VARIABLES),
  ],
};
