import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Nav from './components/Nav.js'
import Search from './components/Search.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
