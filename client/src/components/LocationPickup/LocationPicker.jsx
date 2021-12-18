import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import '../../style/locationpicker.css'

export default function({handleClose})
{

    const {city,handleChange}=useContext(AppContext);
    

    return(<>
        <div className="container-fluid box" style={{width:'100%'}}>
        <div className="input-group mb-3">            
            <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder='Search Cities'/>
        </div>
        <p style={{textAlign:'center'}}>Popular Cities</p>
        <div className="flex">
            <div className='grow' onClick={(e)=>{
                handleChange("ahamedabad")   
                handleClose()
            }}>
                <img src="ah.png" alt="ahamedabad" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Ahamedabad</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("bangalore")   
                handleClose()
            }}>
                <img src="bang.png" alt="Bangalore" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Bangalore</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("Chandigarh")   
                handleClose()
            }}>
                <img src="chandigarh.png" alt="Chandigarh" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Chandigarh</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("chennai")   
                handleClose()
            }}>
                <img src="chennai.png" alt="Chennai" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Chennai</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("Hyderabad")   
                handleClose()
            }}>
                <img src="hyd.png" alt="Hyderabad" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Hyderabad</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("kolkata")   
                handleClose()
            }}>
                <img src="kolkata.png" alt="Kolkata" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Kolkata</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("Kochi")   
                handleClose()
            }}>
                <img src="kochi.png" alt="Kolkata" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Kochi</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("Mumbai")   
                handleClose()
            }}>
                <img src="mumbai.png" alt="Kolkata" className='img-fluid'/>
                <p style={{textAlign:'center'}}>Mumbai</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("NCR")   
                handleClose()
            }}>
                <img src="ncr.png" alt="Kolkata" className='img-fluid'/>
                <p style={{textAlign:'center'}}>NCR</p>
            </div>
            <div className='grow' onClick={(e)=>{
                handleChange("Pune")   
                handleClose()
            }}>
                <img src="pune.png" alt="Pune" className='img-fluid'/>
                <p style={{textAlign:'center'}}>PUNE</p>
            </div>
            
            
        </div>

        </div>
        
    </>)
}