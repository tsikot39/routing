// Import necessary modules
const express = require("express");

// Create an Express application
const app = express();
const port = 3000;

// Import routes
const routes = require("./routes");

// Use routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
