const express = require('express');
const traceroute = require('traceroute');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(express.json());

// Endpoint to receive the user's IP address and perform traceroute
app.post('/traceroute', async (req, res) => {
  const { ip } = req.body;
  try {
    const tracerouteResult = await performTraceroute(ip);
    res.json(tracerouteResult);
  } catch (error) {
    console.error('Error performing traceroute:', error);
    res.status(500).json({ error: 'Traceroute failed' });
  }
});

// Function to perform traceroute for a given IP address
function performTraceroute(ip) {
  return new Promise((resolve, reject) => {
    traceroute.trace(ip, (err, hops) => {
      if (err) {
        reject(err);
      } else {
        resolve(hops);
      }
    });
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
