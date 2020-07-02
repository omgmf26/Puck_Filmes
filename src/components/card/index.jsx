
import React from 'react'

import './Card.css'

export default function Card({filme}){
const imgUrl = "https://image.tmdb.org/t/p/w1280/"
    return(
        <div className="card-filmes">
            <div>
                <span className="material-icons fav-btn">favorite_border</span>
                <div 
                className="poster-image" 
                style={{ backgroundImage: `url( ${imgUrl} ${filme.poster_path} )` }}
                >
                </div>
                <div className="especificacao">
                    <h4>{filme.title}</h4>
                    <span className="material-icons">star</span>
                    {filme.vote_average}
                    </div>
                <a href="#" className="btn-detail">
                <span className="material-icons">add_circle_outline</span> 
                 detalhes
                </a>
            </div>
        </div>
    )

}