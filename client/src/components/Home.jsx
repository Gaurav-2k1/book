import { useEffect, useState } from "react"
import axios from 'axios';
import MovieCard from "./movie_card/MovieCard";
import '../style/home.css'


export default function()
{

    const [movies,setMovies]=useState([]);

    useEffect(async ()=>{
        
        let data=await axios.get(`${process.env.REACT_APP_HOST}/movies`);
        //console.log(data.data);
        setMovies(data.data);



    },[]);
    return(<>
            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>
    </>)

}