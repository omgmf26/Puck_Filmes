
import React from 'react'

import './Card.css'

export default function Card(){
    return(
        <div className="card-filmes">
            <div>
                <span className="material-icons fav-btn">favorite_border</span>
                <div className="poster-image"></div>
                <div className="especificacao">
                    <h4>Vingadores: guerra infinita</h4>
                    <span className="material-icons">star</span>
                    9.8
                    </div>
                <a href="#" className="btn-detail">
                <span className="material-icons">add_circle_outline</span> 
                 detalhes
                </a>
            </div>
        </div>
    )

}