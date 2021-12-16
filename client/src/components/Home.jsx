import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import MovieCard from "./movie_card/MovieCard";
import '../style/home.css'
import Menubar from "./menubar/Menubar";
import PrivacyNote from "./privacyNote/PrivacyNote";
import Footer from "./footer/Footer";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import LocationPicker from "./LocationPickup/LocationPicker";
import { AppContext } from "../contexts/AppContext";


export default function()
{

    const [movies,setMovies]=useState([]);
    
    const [showModal,setShowModal]=useState(false);
    let {city,handleChange}=useContext(AppContext);
    
    console.log(city,handleChange)
    

    function handleClose(e){
        setShowModal(false);
    }

    useEffect(async ()=>{
        

        window.addEventListener('load',(e)=>{
            setShowModal(true);
            
        })
        let data=await axios.get(`${process.env.REACT_APP_HOST}/movies`);
        //console.log(data.data);
        setMovies(data.data);



    },[]);


    
    return(<>
            <Menubar/>


            <Modal size="xl" show={showModal} onHide={handleClose} style={{}}>
                <Modal.Header closeButton>                
                </Modal.Header>
                <Modal.Body>
                    <LocationPicker handleClose={(handleClose)} />
                </Modal.Body>
                
                <p className="red">View All Cities</p>
                
            </Modal>
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

            <img className="img-fluid padded-img" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"/>

            <br/>
            <br/>
            <br/>
            

            <div className="premier-container">
                    
                    <img className="img-fluid padded-img " src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"/>
                    
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