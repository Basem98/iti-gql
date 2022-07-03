const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  DB: {
    URL: process.env.DB_URL
  }
}