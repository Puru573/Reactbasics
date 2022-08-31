import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{
        display:'flex',
        background:"white",
        padding:'1rem',
        justifyContent:"center"
        }}
      >
        <Link to="/" style={{textDecoration:"none"}}>
          <h1 style={{color:'blue'}}>Movies App</h1> 
        </Link>

        <Link to="/fav" style={{textDecoration:"none"}}>
          <h2 style={{marginLeft:"2rem",color:'blue'}}>Favourites</h2>
        </Link>

      </div>
    )
  }
}
