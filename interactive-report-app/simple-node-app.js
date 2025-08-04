// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port the server will listen on.
// It's good practice to use an environment variable for the port,
// but we'll hardcode it to 3000 for simplicity.
const PORT = 3000;

// This middleware allows serving static files (like CSS, images, or client-side JS)
// from a 'public' directory. We are not using it here, but it's good to know.
// app.use(express.static('public'));

// Define a route for the root URL ('/')
// When a user visits the homepage, this function will handle the request.
app.get('/', (req, res) => {
  // We will send back a full HTML page as the response.
  // Using template literals (backticks ``) makes it easy to write multi-line strings.
  const htmlPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Node.js App</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
        }
      </style>
    </head>
    <body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
          <h1 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Welcome!</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            This page is being served by a Node.js and Express server.
          </p>
          <p class="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Current Server Time: ${new Date().toLocaleTimeString()}
          </p>
        </div>
        <footer class="mt-8 text-sm text-gray-500">
          <p>A simple app by Gemini</p>
        </footer>
      </div>
    </body>
    </html>
  `;

  // Send the HTML page to the browser
  res.send(htmlPage);
});

// Start the server and make it listen for incoming requests on the specified port.
// The callback function is executed once the server successfully starts.
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
  console.log('Press CTRL+C to stop the server.');
});
