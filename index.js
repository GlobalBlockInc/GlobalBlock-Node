// Auto-generated Node Software Skeleton for GlobalBlockInc
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('GlobalBlock Node is up and running!');
});

app.post('/compute', (req, res) => {
  res.send('Compute task received.');
});

app.post('/storage', (req, res) => {
  res.send('Storage task received.');
});

app.post('/cdn', (req, res) => {
  res.send('CDN task received.');
});

app.listen(port, () => {
  console.log(`GlobalBlock Node listening on port ${port}`);
});
