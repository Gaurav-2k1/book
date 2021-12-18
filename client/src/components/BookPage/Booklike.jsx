import Slider from "react-slick";
import MovieCard from "../movie_card/MovieCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import {Link} from 'react-router-dom';

const styles = {
fontSize: "24px",
fontStyle: "normal",
fontWeight: "900",
lineHeight: "28px",
marginLeft:"50px",
marginTop:"30px",
marginBottom:"20px"
}

export const Booklike = ({allmovies})=>{
    const settings = {
        // infinite: true,
        speed: 500,
        slidesToShow: 3.7,
        slidesToScroll: 1
      };
    
    return(
        <>
      
        <h1 style={styles}>You might also like</h1>
        <Slider {...settings} style={{marginLeft:"50px",maxWidth:"993px"}}>
            
                   {
                      allmovies.map((item)=>(
                          <div key={nanoid(5)}  onClick={()=>{return  window.scrollTo(0,0)} }>
                              <Link to={`/movie/${item._id}`} style={{textDecoration:"none"}}>
                             <MovieCard image={item.img_url} title={item.title} tag={item.genre} id={item._id}/>
                             </Link>
                         </div>
                        ))
                    }      
                       </Slider>
        </>
    )           
      
}                          
                         
                   
               
