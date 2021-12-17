import Slider from "react-slick";
import MovieCard from "../movie_card/MovieCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";

const styles = {
fontSize: "24px",
fontStyle: "normal",
fontWeight: "900",
lineHeight: "28px",
marginLeft:"50px",
marginTop:"30px",
marginBottom:"20px"
}

export const Booklike = ()=>{
    const settings = {
        // infinite: true,
        speed: 500,
        slidesToShow: 3.7,
        slidesToScroll: 1
      };

      const arr = [{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",title:"Spiderman:Away from home",tag:"Hindi"}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/resident-evil-welcome-to-raccoon-city-et00316029-29-10-2021-03-39-35.jpg",title:"Resident Evil",tag:"Hindi"}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/antim-the-final-truth-et00303116-22-11-2021-05-17-20.jpg",title:"Antim The final truth",tag:"Hindi"}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/satyameva-jayate-2-et00113105-01-11-2021-03-15-20.jpg",title:"Satymev Jayate",tag:"Hindi"}
                    ]

    return(
        <>
        <h1 style={styles}>You might also like</h1>
        <Slider {...settings} style={{marginLeft:"50px",maxWidth:"993px"}}>
            
                   {
                      arr.map((item)=>(
                          <div key={nanoid(5)}>
                             <MovieCard image={item.img} title={item.title} tag={item.tag}/>
                         </div>
                        ))
                    }      
                       </Slider>
        </>
    )           
      
}                          
                         
                   
               
