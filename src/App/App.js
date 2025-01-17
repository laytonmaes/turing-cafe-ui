import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Form from './components/Form';


class App extends Component {
  constructor () {
    super()
    this.state = {reservations: []}
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => 
      this.setState({reservations:data})
      )
  }

  addNewRes = (newRes) => {
    this.setState({reservations: [...this.state.reservations, newRes]} )
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addNewRes={this.addNewRes} />
        </div>
        <div className='resy-container'>
        <CardSection reservations={this.state.reservations}/>
          
        </div>
      </div>
    )
  }
}

export default App;
