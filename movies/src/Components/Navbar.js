import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',background:"white",padding:'1rem',justifyContent:"center"}}>
        <h1 style={{color:'blue'}}>Movies App</h1>
        <h2 style={{marginLeft:"2rem",color:'blue'}}>Favourites</h2>
      </div>
    )
  }
}
