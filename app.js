const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Welcome to my api!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
