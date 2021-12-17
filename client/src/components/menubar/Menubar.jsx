import '../../style/menubar.css'

import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
export default function(){
    

    const {city,setCity}=useContext(AppContext);
    
    return(<>   
            <div className="container-fluid menubar">
                <div className="flex left">
                <Link to={`/moviepage/${city}`}><p className="menubar-item">Movies</p></Link>
                <p className="menubar-item">Stream <sup>new</sup></p>
                <p className="menubar-item">Events</p>
                <p className="menubar-item">Plays</p>
                <p className="menubar-item">Sports</p>
                <p className="menubar-item">Activities</p>
                <p className="menubar-item">Buzz</p>
                </div>
                <div className="grow"></div>
                <div className="flex right">
                <p className="menubar-item">Liveshows</p>
                <p className="menubar-item">Corporate</p>
                <p className="menubar-item">Offers</p>
                <p className="menubar-item">GiftCards</p>
                
                </div>
                <div className="clear"></div>
            </div>
    </>)
}