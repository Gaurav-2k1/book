import { useEffect, useState } from "react"
import axios from 'axios';
import MovieCard from "./movie_card/MovieCard";
import '../style/home.css'
import Menubar from "./menubar/Menubar";
import PrivacyNote from "./privacyNote/PrivacyNote";
import Footer from "./footer/Footer";




 const Home =function()
{

    const [movies,setMovies]=useState([]);

    return(<>
            <Menubar/>
 
            <div className="container-fluid padd">
                <div className="left">
                    <p className="heading-4">Recommended Movies</p>
                </div>
                <div className="right">
                    <p className="heading-3">see all &#8594;	</p>
                </div>
                <div className="clear"></div>
            </div>

            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>

            <br/>
            <br/>

            <img alt="" className="img-fluid padded-img" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"/>

            <br/>
            <br/>
            <br/>
            

            <div className="premier-container">
                    
                    <img alt="" className="img-fluid padded-img " src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"/>
                    
                    <br/>
                    <br/>

                    <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]} headingColor="white" subHeadColor="white" />
                    
                })}
                
            </div>
            </div>

            <br/>
            <br/>

            <div className="container-fluid padd">
                <div className="left">
                    <p className="heading-4">Top Games &amp; Sports Events</p>
                </div>
                <div className="right">
                    <p className="heading-3">see all &#8594;	</p>
                </div>
                <div className="clear"></div>
            </div>
                

            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>
            <br/>
            <br/>

            <div className="container-fluid padd">
                <div className="left">
                    <p className="heading-4">Top Games &amp; Sports Events</p>
                </div>
                <div className="right">
                    <p className="heading-3">see all &#8594;	</p>
                </div>
                <div className="clear"></div>
            </div>


            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>
            <br/>
            <br/>

            <div className="container-fluid padd">
                <div className="left">
                    <p className="heading-4">Top Games &amp; Sports Events</p>
                </div>
                <div className="right">
                    <p className="heading-3">see all &#8594;	</p>
                </div>
                <div className="clear"></div>
            </div>


            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>
            <br/>
            <br/>

            <div className="container-fluid padd">
                <div className="left">
                    <p className="heading-4">Top Games &amp; Sports Events</p>
                </div>
                <div className="right">
                    <p className="heading-3">see all &#8594;	</p>
                </div>
                <div className="clear"></div>
            </div>


            <div className="container-fluid movies-list">
                {movies.map((el,index)=>{
                    
                    return <MovieCard title={el.title} image={el.img_url} tag={el.genre[0]}/>
                    
                })}
                
            </div>


            <PrivacyNote/>
            <Footer/>
    </>)

}


export default Home;