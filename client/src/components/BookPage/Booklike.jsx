import Slider from "react-slick";
import { Slicker } from "./Slicker";

export const Booklike = ()=>{
    const settings = {
        //  infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };

    return(
        <>
        <h1>You might also like</h1>
        <Slider {...settings}>
            <div>
                {/* <div>
                    <img src={} alt=""/>
                    <div>
                        <img src={} alt=""/>
                    </div>
                </div> */}
            </div>
        </Slider>
        </>
    )
}