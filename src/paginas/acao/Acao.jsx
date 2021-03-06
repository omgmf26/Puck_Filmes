import React, {useEffect, useState} from 'react'
import './acao.css';
import axios from 'axios'

import Card from "../../components/card"

export default function Acao () {

    const[filmes, setFilmes] = useState([])

    useEffect(() => {load() }, [])
    
    async function load(){
        try{
        const resposta = await axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=3fee54059b5bf82c32ec182782ed312e&language=pt-BR")
        setFilmes(resposta.data.results)
        console.log(resposta.data.results)
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

