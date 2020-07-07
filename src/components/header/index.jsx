import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'

import "./Header.css"

function Header (props){

    const [search, setSearch] = useState("");

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?query=" + search)
    }

    return(
        <div className="Header" >
        <div className="Logo">Puck Filmes</div>
        <div className="field-search">
            <form onSubmit ={buscar}>
            <button type="submit">procurar</button>
            <span className="material-icons pesquisa">search</span>
            <input 
            type="text" 
            name="query" 
            id="query" 
            onChange={ e => setSearch (e.target.value) }>
            </input>
            </form>
        </div>
        <span className= "hr"></span>
        </div>
    )

}

export default withRouter(Header)