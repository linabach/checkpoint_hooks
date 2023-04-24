import React from 'react'
import './MovieStyle.css'
import ReactStars from "react-rating-stars-component";

function Movie({Movie}) {
  return (
    <div>
       <div class="box">
          <div class="imgBx">
            <img src={Movie.imgSrc} alt="poster"/>
          </div>
          <div class="content">
            <div >
              <h2>{Movie.name}<br/><span>{Movie.description}</span></h2>
              <button class="custom-btn btn-12"><span>Play</span><span>Watch now</span></button>
            </div>
           
          </div>
          
           <div>
          <ReactStars
              value={Movie.rate}
              size={24}
              activeColor="#ffd700"
              edit={false}/> </div> 
      </div>
    </div>)
}

export default Movie
