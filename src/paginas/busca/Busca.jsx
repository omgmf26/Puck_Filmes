import React, {Fragment , useEffect, useState} from 'react'
import axios from 'axios'

import Card from "../../components/card"

export default function Busca (props) {

    const[filmes, setFilmes] = useState([])
    const urlAPI = "https://api.themoviedb.org/3/search/movie" +
                    props.location.search +
                    "&api_key=3fee54059b5bf82c32ec182782ed312e&language=pt-BR"

    useEffect(() => load(), [props.location.search])
    
    async function load(){
        try{
        const resposta = await axios.get(urlAPI)
        setFilmes(resposta.data.results)
        console.log(props.location)
        }catch(erro){
            console.log(erro)
        }
       
    }
    return (
        <div className="content">
            {filmes.map((filme) => <Card filme={filme} />)}
         </div>

    );

}

