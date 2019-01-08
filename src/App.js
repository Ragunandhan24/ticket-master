import React, { Component } from 'react';
import TicketIndex from '../src/tickets/index'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Ticket Master</h1>
          <TicketIndex/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
