import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from "nanoid";

export const Slicker = ()=>{
    const settings = {
        //  infinite: true,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1
      };

      return (
          <Slider {...settings} style={{maxWidth:"993px",marginLeft:"50px",marginTop:"30px"}}>
            {
                [1,2,3,4,5,6].map((item)=>(
                     <div key={nanoid(5)}>
                          <div className=" m-3 slicker-review-content">
                               <div className="user-img-likes-cont">
                                      <div className="user-img-likes">
                                          <img src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" alt=""/><span>Dibyajoti</span>
                                      </div>
                                       <div>
                                          <img src= {"heart.png"} style={{display:"inline"}} alt=""/><span style={{display:"inline"}}>100%</span>
                                      </div>
                               </div>
                               <h1  className="text-start">#SuperDirection #GreatActing #AwesomeStory...</h1>
                               <p>Hatters gone hate but whatever must say just go & watch the movie and review it by yourself.... The movie was good, good storyline but the problem was.</p>
                               <p className="likes-dislikes">
                                       <img src={"like.png"} style={{display:"inline"}} alt=""/>
                                       <span style={{display:"inline"}}>789</span>
                                       <img src={"dislike.png"}style={{display:"inline"}} className="dislike" alt=""/>
                                       <span>45</span>
                              </p>
                          </div>
                     </div>
                ))
            }
          </Slider>
      )
}