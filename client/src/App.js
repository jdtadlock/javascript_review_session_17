import React, { Component } from 'react';

import { getAll } from './util';

/* 
1. Models
Component
State
*/

class App extends Component {
  state = {
    notes: []
  }
  // componentDidMount() {
  //   test().then(data => {
  //     console.log(data);
  //   });
  // }
  // Make an Ajax request to the backend
  getNotes = () => {
    getAll()
      .then(notes => {
        this.setState({
          notes: [...notes]
        })
      })
  }

  render() {

    return (
      <div>
        <h1>Another one!</h1>

        <button onClick={this.getNotes}>Get All Notes</button>


        {this.state.notes.map(note => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

// const vals = ['one', 'two', 'three'];


// const new_vals = [...vals];
