import React, { Component } from 'react'

class ApiForm extends Component {
    state = {
        api: ""
    }

    handleChange = (e) => {
        this.setState({
            api:  e.target.value})    
    }

    handleSubmit(e) {
        e.preventDefault()
        const api = e.target.querySelector('input').value
        fetch(api)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input id="api" type="text" value={this.state.api} onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        )
    }
}

export default ApiForm

