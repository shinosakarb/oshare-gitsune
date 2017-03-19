import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import './index.css'

class Person extends Component {
  componentWillMount() {
    this.props.actions.request(`/api/people/${this.props.match.params.id}.json`)
  }

  render() {
    const person = this.props.records.find('people', this.props.match.params.id)
    return (
      <div className="Person">
        <div className="Person-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Hello {person.name}</h2>
        </div>        
        <p><Link to="/">Home</Link></p>
      </div>
    )
  }
}

export default Person
