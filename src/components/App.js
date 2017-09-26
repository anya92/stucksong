import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      auth: null
    };
  }
  componentDidMount() {
    axios.get('/api/current_user')
      .then(res => this.setState({ auth: res.data || false }))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <Navbar auth={this.state.auth} />
        <h1>I Love This Song 💘</h1>

      </div>
    );
  }
}

export default App;
