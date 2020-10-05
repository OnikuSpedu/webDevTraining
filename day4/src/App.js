import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props); // calls the constructor of Component.
      
    this.state = { // set default state
      users: [], 
      loading: false
    };

    // bind this when constructed so handleSubmit works.
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  getUsers() {
    this.setState({ //Change the state of loading
      loading: true
    });
    axios('https://api.randomuser.me/?nat=US&results=5').then(response =>
      this.setState({
        users: [...this.state.users, ...response.data.results], //combine the users of the results and perviousstate
        loading: false //everything was loaded to change the loading.
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  componentWillMount() {
    this.getUsers(); //get the users once it mounts
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        <hr />
        {!loading ? (
          users.map(user => ( //create the cards for the user. Adds name in blue font
            <div key={user.id.value}>
              <h3 style={{ color: 'blue' }}>{user.name.first}</h3> 
              <p>{user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Loading..." /> //uses the loading component
        )}
      </div>
    );
  }
}

export default App;
