import React from 'react'

import "./Header.css"

export default function Header (props){
    return(
        <div className="Header" >
        <div className="Logo">Puck Filmes</div>
        <div className="field-search">
            <span className="material-icons pesquisa">search</span>
            <input type="text" name="search" id="search"></input>
        </div>
        <span className= "hr"></span>
        </div>
    )

}