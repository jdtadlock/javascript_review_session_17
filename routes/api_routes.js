const router = require('express').Router();
const notes_controller = require('../controllers/notes_controller'); // Object

// localhost:5000/api/notes
// You can visit routes in the address bar or through an Ajax request
// app.get('/api/notes', function(request, response) {

//})
router.get('/notes', (request, response) => { // Express Route
  // response.json([
  //   { title: 'note 1', body: 'note body' }
  // ]);
  notes_controller.getAll(response);
});


module.exports = router;
















// localhost:5000/api/test
// router.get('/test', (req, res) => {
//   console.log('test');
// });

// router.get('/two', (req, res) => {
//   console.log('two');
// });

// router.get('/three', (req, res) => {
//   console.log('three');
// });

// router.get('/four', (req, res) => {
//   console.log('four');
// });






// module.exports = function (app) {
//   app.get('/api/notes', (req, res) => {

//   });
// }