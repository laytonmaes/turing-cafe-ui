import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor () {
    super()
    this.state = {reservations: [], resCards: []}
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => 
      this.setState({reservations:data, resCards:[]})
      )
    .then (() => {
      const allCards = this.state.reservations.map((reservation) => {
        return (
        <Card 
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
        )
      })
    
      this.setState(prevState => {return {reservations:prevState, resCards: allCards}})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        {this.state.resCards}
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
