import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Hero extends React.Component{

  render(){
    return(

      <div className="container theme-showcase" role="main">

      <div className="jumbotron">
        <h1>oX</h1>
        <p>This template is a working product of the oX framework. It features React alongside with react-router 4, MobX for state management and mongoDB for data fetching and storing.</p>
        <p>A customizable bootstrap template is available as well as the font-awesome library. The full stack list can be found here.</p>
      </div>   
      </div>

    )
  }
}