import Slider from "react-slick";
import MovieCard from "../movie_card/MovieCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1
      };

      const arr = [{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",title:"Antim The final truth",tag:""}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",title:"Antim The final truth",tag:""}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",title:"Antim The final truth",tag:""}
                   ,{img:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",title:"Antim The final truth",tag:""}
                    ]

    return(
        <>
        <h1 style={styles}>You might also like</h1>
        <Slider {...settings} style={{marginLeft:"50px",maxWidth:"993px"}}>
            
                   {
                      arr.map((item)=>(
                          <div>
                             <MovieCard image={item.img} title={item.title}/>
                         </div>
                        ))
                    }      
                       </Slider>
        </>
    )           
      
}                          
                         
                   
               
