const express = require('express');
const app = express();
const sequelize = require('./config/database'); // Adjust the path as needed
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Test DB connection
sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected...');
  })
  .catch((err) => {
    console.error('DB connection failed:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3001`);
});