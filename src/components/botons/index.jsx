import React from 'react'

import "./Botons.css"

export default function Botons (props){
    return(
        <div className="Botons" >
        <a href="#" className="btn-Favoritos">Favoritos</a>
        <a href="#" className="btn-Favoritos1">Ação</a>
        <span className= "hr2"></span>
        <a href="#" className="btn-Favoritos2">Comédia</a>
        <span className= "hr3"></span>
        <a href="#" className="btn-Favoritos3">Terror</a>
        <span className= "hr4"></span>
        <a href="#" className="btn-Favoritos4">Animação</a>
        <span className= "hr5"></span>
        <a href="#" className="btn-Favoritos5">Romance</a>
        </div>
    )
}

