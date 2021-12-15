import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Bookcast = ()=>{
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <>
        <h1 className='text-start about-movie-text'>Cast</h1>
        <div style={{width:"993px",margin:"20px"}}>
        <h2> Multiple items </h2>
      
        <Slider {...settings} className="slider-css">
            
         {[1,2,3,4,5].map((item)=>(
             <div className="col" >
             <div className="border border-primary m-3 "style={{height:"300px" ,borderRadius:"150px"}} ><h1>{item}</h1></div>
             </div>
         ))}
   
        </Slider>
        
      </div>
        </>
    )
}