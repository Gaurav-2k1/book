
import '../../style/navbar.css'
import {useContext} from 'react'

import { AppContext } from '../../contexts/AppContext'
import Button  from 'react-bootstrap/Button'



export default function()
{

    const {city,handleChange} = useContext(AppContext)


    return(<>

        <div className="container-fluid navbar">
               <div>
               <img src="logo.png"/>
               </div>    

               <div>
                   <input className="inp" placeholder='Search for movies sports and events' />
               </div>     

               <div className="grow">
                   
               </div>

                <div>
                    <p className='sub'>{city} <img className='img-fluid' src='down.png'/></p>
                </div>
               <Button className='btn-signin'>Signin</Button>

               <img  src="menu.png" className="img-fluid"/>
        </div>  


    </>)
}