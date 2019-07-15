const { Note } = require('../db');

// Note.create({
//   title: 'note 1',
//   body: 'body of note 1'
// }).then(() => {
//   Note.create({
//     title: 'note 2',
//     body: 'note 2 body'
//   }).then(() => { });
// })

// db.Note, db.User, Card, Another
module.exports = {
  getAll(response) { // <<--- Method ES6
    // Get all Notes
    Note.find({})
      // return all notes to the front end
      .then(notes => response.json(notes))
  }
}

// obj.getAll()

// objects have properties and methods
// property - just a value
// method - function