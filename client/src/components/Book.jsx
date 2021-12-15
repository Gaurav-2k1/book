import axios from 'axios'
import { useEffect, useState } from 'react';
import "../style/book.css";
import { Bookcast } from './Bookcast';

export const Book = ()=>{
   const [movies,setMovies] = useState([]);

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
        <div className='book' style={{backgroundImage:`url(${item.bg_img})`,backgroundSize:"cover"}}>
            <div className='heading-cont'>
                <div className='movie-img-cont'> <img src={item.img_url}/> </div>
                <div className='movie-detail'>
                    <h1 className='text-white'>{item.title}</h1>
                    <p className='text-white'><span className='me-2'>{item.likes}</span><span>{item.ratings}ratings</span></p>
                    <div className='rating-box mb-2'>
                     <div>
                      <div  className='add-rating-text'>Add your rating</div>
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
      <Bookcast/>
        </div>
    )
}

