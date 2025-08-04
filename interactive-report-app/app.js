// Import the necessary modules from Node.js
const express = require('express');
const path = require('path');

// Create an instance of the Express application
const app = express();

// Define the port the server will listen on.
// This will use the port assigned by the deployment environment (like Render or Heroku),
// or default to 3000 if you are running it locally.
const PORT = process.env.PORT || 3000;

// This middleware is essential for serving static files like CSS, JavaScript, and images.
// We tell it to serve files from the same directory where the script is running.
app.use(express.static(path.join(__dirname)));

// Define a route for the root URL ('/')
// When a user visits the homepage, this function will handle the request.
app.get('/', (req, res) => {
  // Instead of sending a hardcoded string, we send the 'index.html' file.
  // path.join() creates a reliable file path that works on any operating system.
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and make it listen for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
