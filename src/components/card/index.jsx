
import React from 'react'

import './Card.css'

export default function Card({filme}){
const nota = filme.vote_average.toFixed(1)
const imgUrl = "https://image.tmdb.org/t/p/w1280/"

    return(
        <div className="card-filmes">
            <div>
                <span className="material-icons fav-btn">favorite_border</span>
                <div 
                className="poster-image" 
                style={{ backgroundImage: `url( ${imgUrl}${filme.poster_path} )` }}
                >
                </div>
                <div className="especificacao">
                    <h3>{filme.title}</h3>
                    <span className="material-icons">star</span>
                    {nota}
                    </div>
                <a href="#" className="btn-detail">
                <span className="material-icons">add_circle_outline</span> 
                 detalhes
                </a>
            </div>
        </div>
    )


}