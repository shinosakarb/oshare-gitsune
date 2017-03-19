import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Person from '../containers/Person'

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/people/:id" component={Person}/>
  </div>    
)

export default Routes
