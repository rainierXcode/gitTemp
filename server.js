// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route for getting users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  res.json(users); // Sends JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
