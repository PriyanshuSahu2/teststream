const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed

// Enable CORS for all routes
app.use(cors());

// Serve the HLS files from the directory where your HLS content is located
const hlsDirectory = path.join(__dirname, 'Video');
app.use(express.static(hlsDirectory));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
