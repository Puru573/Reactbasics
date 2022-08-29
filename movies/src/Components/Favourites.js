import React, { Component } from 'react'
import axios from 'axios';

export default class Favourites extends Component {
  constructor(){
    super();
    this.state={
      movies:[]
    }
  }
  async componentDidMount(){
    let ans=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a70924997e02110adcecdf0c4fa26bff&language=en-US&page=1`);
    this.setState({
      movies:[...ans.data.results],
    });
  }
  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    return (
      <div class="row">
        <div class="col-3 favourite-list">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">ALL GENRE</li>
            <li class="list-group-item">ROMANCE</li>
            <li class="list-group-item">FANTASY</li>
            <li class="list-group-item">HORROR</li>

          </ul>
        </div>
        <div class="col favourite-table">
          <div class="row">
            <input type="text" className="col" placeholder="Search"></input>
            <input type="number" className="col" placeholder="5"></input>
          </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Popularity</th>
              <th scope="col">Rating</th>
            </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movieObj)=>(
                  <tr>
                  <td scope="row"><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}style={{width:'8rem'}}/>{movieObj.original_title}</td>
                  <td>{genreId[movieObj.genre_ids[0]]}</td>
                  <td>{movieObj.popularity }</td>
                  <td>{movieObj.vote_count}</td>
                  <td>{movieObj.vote_average}</td>
                  <td>
                    <button class="btn btn-outline-danger">Delete</button>
                  </td>
                  </tr>
              ))}
            </tbody>
        </table>
       </div>
      </div>
    )
  }
}