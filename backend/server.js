const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;


// Enable CORS for all origins
app.use(cors());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});