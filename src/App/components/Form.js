import React, { Component } from "react";

class Form extends Component {
    constructor () {
        super()
        this.state = {name: "", date: "", time: "", number: ""} 
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearInputs = () => {
        this.setState({name: "", date: "", time: "", number: ""})
    }
    submitRes = (event) => {
        event.preventDefault()
        const newRes = {
            ...this.state,
            id:Date.now(),
        }

        this.props.addNewRes(newRes)
        this.clearInputs()
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event)}
                />

                <input
                    type="text"
                    placeholder="date"
                    name="date"
                    value={this.state.date}
                    onChange={(event) => this.handleChange(event)}
                />

                <input
                    type="text"
                    placeholder="time"
                    name="time"
                    value={this.state.time}
                    onChange={(event) => this.handleChange(event)}
                />

                <input
                    type="text"
                    placeholder="number"
                    name="number"
                    value={this.state.number}
                    onChange={(event) => this.handleChange(event)}
                />

                <button onClick={(event) => this.submitRes(event)}>
                    Book A Reservation
                </button>
            </form>
        )
    }
}

export default Form