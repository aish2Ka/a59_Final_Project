const serverless = require('serverless-http');
const app = require('./api/routes/app');

module.exports = serverless(app);
