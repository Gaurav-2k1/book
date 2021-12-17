import axios from 'axios'
import { useEffect, useState } from 'react';
import "../../style/book.css";
import { Bookcast } from './Bookcast';
import { Bookcrew } from './Bookcrew';
import {nanoid} from 'nanoid'
import { Slicker } from './Slicker';
import { Booklike } from './Booklike';

export const Book = ()=>{
   const [movies,setMovies] = useState([]);
   const arr = [{text:"#Awesome story",id:4490},{text:"#Great Acting",id:5580},{text:"#Wow Music",id:"8698"},{text:"#Must Watch",id:"6682"}]

   useEffect(()=>{
       getData();
   },[])

const getData = async()=>{
    let {data}  = await axios.get("http://localhost:3004/movies");
   setMovies(data)
}

// console.log(movies)
    return(
        <div className="book-cont">
   {
       movies.map((item)=>(
        <div className='book' style={{backgroundImage:`url(${item.bg_img})`,backgroundSize:"cover"}} key={nanoid(5)}>
            <div className='heading-cont'>
                <div className='movie-img-cont'> <img src={item.img_url}/> </div>
                <div className='movie-detail'>
                      <h1 className='text-white'>{item.title}</h1>
                      <p className='text-white'><img src={"heart.png"} className='me-1'/><span className='me-2'>{item.likes}</span><span>{item.ratings}ratings</span></p>
                     <div className='rating-box mb-2'>
                         <div>
                              <div  className='add-rating-text'>Add your ratings and reviews</div>
                               <div>Your ratings matter</div>
                          </div>
                     <div className='rate-now-btn'><button className='btn'>Rate now</button></div>
                    </div>
                    <div><button className='btn bg-white mt-2 mb-2'>{item.view}</button></div>
                    <div><button className='btn bg-white'>{item.language}</button></div>
                    <div className='text-white movie-duration mt-2'><span className='m-2'>{item.duration}</span>{item.genre.map((action)=>(<span className='m-1'>{action},</span>))}<span className='m-2'>{item.certificate}</span>{item.release}<span></span></div>
                    <button className='btn book-btn mt-3'>Book Tickets</button>
                </div>
                <div>
                </div>
            </div>
          </div>
       ))
   }
   <div>
        <h1 className='text-start about-movie-text'>About the movie</h1>
        <p className='movies-description'>Based on Jack Kirby`s Eternals, Marvel Studios brings yet another thrilling superhero flick with the saga of The Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.</p>
    </div>

      {/* --   ---         --    --   casting section-------- */}
     <div className='row cast-section'>
         <h1 className='text-start mb-4'>Cast</h1>
         {movies.map((item)=>(
           <Bookcast item={item.cast} key={nanoid(5)}/>
       ))}
       </div>

       {/* ------------crew section---------------- */}
       
       <div className='row cast-section'>
          <h1 className='text-start mb-4'>Crew</h1>
           {movies.map((item)=>(
           <Bookcrew item={item.cast} key={nanoid(5)} key={nanoid(5)}/>
       ))}
       </div>

     {/* -------------top reviews section------------- */}
      <div className='top-review-section'>
          <h1>Top reviews</h1>
          <h1>10.6K reviews</h1>
          <p className='mt-2'>Summary of 10.6K reviews</p>
         <div className='row'>
         {arr.map((item)=>(
            <div className='col me-2 pt-2  top-review-col' key={nanoid(4)} style={{paddingLeft:"30px"}} key={nanoid(5)}>
            <span className='me-4' style={{color:"#E94362"}}>{item.text}</span><span className='text-end '>{item.id}</span>
            </div>
         ))}
        </div>
      </div>

      {/* ----------------slicker section of reviews------------- */}
       <Slicker/>
    {/* --------You might also like----------- */}
      <div>
       <Booklike />
      </div>
        </div>
       
    )
}

