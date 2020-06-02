import React from 'react'

import "./Header.css"

export default function Header (props){
    return(
        <div className="Header" >
        <div className="Logo">Puck Filmes</div>
        <input type="text" name="search" id="search"></input>
        <span className= "hr"></span>
        </div>
    )

}