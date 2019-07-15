const express = require('express');
const PORT = 5000;

const api_routes = require('./routes/api_routes');

const app = express();

// Use Router object to start routes from a predefined url
// Start from localhost:5000/api
app.use('/api', api_routes);


app.listen(PORT, () => console.log('Listening on port %s', PORT));









// Listen for that request and do something in return
// app.get('/test', (req, res) => {
//   // Send a test message
//   res.send('It worked!');
// });

// app.post();

// const Router = express.Router; // Router constructor

// // Create a new express router instance
// const router = Router();