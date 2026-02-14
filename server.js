const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (if you have CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Route to serve flower.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'flower.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
