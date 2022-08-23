import React, { Component } from 'react'
import { movies } from './getMovies';
import axios from 'axios';
export default class List extends Component {
  constructor(){
    // super se extends vali componenet pehle chalega
    super();
    console.log("constructor is called")
    this.state={
      hover:" ",
      parr:[1],//ab tak main konse page par hum,or what page result am i showing
      currPage:5,
      movies:[],
    }
  }
  // this is two eventlistener
  handeleEnter=(id)=>{
    this.setState({
      hover:id
     
    })
  } ;
  handleLeave=()=>{
    this.setState({
      hover:'',
    })
  }; 

  async componentDidMount(){
    console.log("componentdidmount is called");
    let res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a70924997e02110adcecdf0c4fa26bff&language=en-US&page=${this.state.currPage}`);
    // console.log(res.data);
    this.setState({
      movies:[...res.data.results]//movies ke obj honge[{},{},{}]
    })
  }
  render() {
    console.log("render is called");
    // let movie=movies.results;
    return (

        <>

            {this.state.movies.length==0 ?( //jab tak movie nhi ayi tab tak humne loader lga dya
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ):(
                <div>
                  {/* text center ek property he bootstarp ki jise jo bhi hum iske andar likhte he vo center me aa jata he */}
                    <h3 className='text-center'> 
                        <strong>Trending</strong>
                    </h3>
                    
                    <div className="movies-list">
                    {
                        this.state.movies.map((movieObj)=>(//movieobj pr loop lagaya and ek ek movie late gye
                        // this is basically do what that me jab movie obj load hoga than movieobj ki id and hover ki id same hui to uspar add button aye ga 
                        // and false hote hi chala jayega
                        <div className="card movie-card movie-img" onMouseEnter={()=>this.handeleEnter(movieObj.id)} 
                        onMouseLeave={()=>this.handleLeave}>
                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}className="card-img-top banner-img" alt="..." 
                            style={{height:"40vh"}}
                            />
                            {/* <div className="card-body banner-title"> */}
                            <h5 className="card-title movie-title">{movieObj.original_title}</h5>
                            {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                            <div className="button-wrapper">
                              {
                                this.state.hover==movieObj.id && (
                                <a href="#" class="btn btn-primary movie-button"> Add to favourites</a>
                              )}
                               
                            </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="pagination">
                      {/* this is a pagination from bootstrap */}
                    <nav aria-label="Page navigation example">  
                      <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        {
                        this.state.parr.map(pageNum =>(
                        <li class="page-item">
                          <a class="page-link" href="#">
                            {pageNum}
                          </a> 
                        </li>
                        ))
                        }
                
               
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                      </ul>
                    </nav>
                    </div>

                </div>
           
            )}
            
        
        </>
    );
  }
}
