const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  ENVIRONMENT: JSON.stringify('development'),
  PORT: JSON.stringify('9090'),
  GREETING_MESSAGE: JSON.stringify('API Running In Development Environment'),
  API_WORKS_MESSAGE: JSON.stringify('Development API Works!!!'),
  DB_USERNAME: JSON.stringify('dev username'),
  DB_PASSWORD: JSON.stringify('dev password'),
  DB_CONNECTION_STR: JSON.stringify('dev connection string'),
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    ENVIRONMENT: JSON.stringify('test'),
    PORT: JSON.stringify('8090'),
    GREETING_MESSAGE: JSON.stringify('API Running In test Environment'),
    API_WORKS_MESSAGE: JSON.stringify('test API Works!!!'),
    DB_USERNAME: JSON.stringify('username'),
    DB_PASSWORD: JSON.stringify('password'),
    DB_CONNECTION_STR: JSON.stringify('connection string'),
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    ENVIRONMENT: JSON.stringify('production'),
    PORT: JSON.stringify('7090'),
    GREETING_MESSAGE: JSON.stringify('API Running In production Environment'),
    API_WORKS_MESSAGE: JSON.stringify('production API Works!!!'),
    DB_USERNAME: JSON.stringify('prod username'),
    DB_PASSWORD: JSON.stringify('prod password'),
    DB_CONNECTION_STR: JSON.stringify('prod connection string'),
  };
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),

  ],
};
