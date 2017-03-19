import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p><Link to="/people/1">Ruby</Link></p>
        <p><Link to="/people/2">Dia</Link></p>
      </div>
    )
  }
}

export default Home
