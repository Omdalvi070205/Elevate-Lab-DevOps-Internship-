// Import the required modules
const express = require('express');
const path = require('path'); // The 'path' module is essential for working with file paths

// Create an instance of the Express application
const app = express();

// Define the port the server will listen on.
// It's good practice to use an environment variable, but we'll hardcode it
// to match the port exposed in your Dockerfile.
const PORT = 3000;

// Define a route for the root URL ('/')
// When a user visits the homepage, this function will handle the request.
app.get('/', (req, res) => {
  // Instead of creating HTML here, we will send the 'index.html' file.
  // path.join() is used to create a correct, cross-platform file path.
  // __dirname is a Node.js variable that gives the absolute path of the directory
  // containing the currently executing file (in this case, /app inside the container).
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and make it listen for incoming requests on the specified port.
// The callback function is executed once the server successfully starts.
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
  console.log('Serving index.html...');
  console.log('Press CTRL+C to stop the server.');
});
