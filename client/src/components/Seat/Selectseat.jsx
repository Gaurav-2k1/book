import { nanoid } from "nanoid"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/"
import "../../style/selectseat.css"
export const Selectseat = ({handleSelection,update})=>{
    

    const [seats,setSeats]=useState(0);
    const history = useHistory();
    const {id,bookingId} = useParams();
    const [Aseats,setASeats]=useState([1,2,3,4,5]);

    const [selectedIndex,setSelectedIndex]=useState(-1);


    console.log("Bookign id in pop up is ",bookingId);
    //

  return (
      <div className="select-seat-container">
          <div className="select-seat-content">
             <div className="how-many-seat">How Many Seats?</div>
             <img src={`${process.env.PUBLIC_URL}/cycle.png`} alt="" className="cycle-img"/>
             <div className="btn-div-cont">
                 {Aseats.map((item,index)=>(

                     index===selectedIndex? <button onClick={()=>{                        
                        setSeats(item);
                        setSelectedIndex(index);
                    }} className="btn ml-3 me-3" style={{background:'tomato'}} key={nanoid(5)}>{item}</button> :
                     <button onClick={()=>{                        
                         setSeats(item);
                         setSelectedIndex(index);
                     }} className="btn ml-3 me-3" key={nanoid(5)}>{item}</button>
                 ))}
             </div>
             <img src={"line.png"} alt="" className="line-img"/>
             <div className="seat-rate classic">
                 <div className="which-class">Classic</div>
                 <div className="rate">Rs 150</div>
                 <div className="available">Available</div>
             </div>
             <div className="seat-rate prime">
                 <div className="which-class">Prime</div>
                 <div className="rate">Rs 170</div>
                 <div className="available">Available</div>
             </div>
             <div className="seat-rate recliner">
                 <div className="which-class">Recliner</div>
                 <div className="rate">Rs 290</div>
                 <div className="available">Available</div>
             </div>


             {seats==0 ? <button disabled onClick={()=>{
                 handleSelection(seats);
                 update(seats)
                 setTimeout(()=>{
                    history.push(`/seating/`+bookingId);
                 },3000);
                 
                 
                 
                 



             }}  className="btn btn-danger select-seat-btn" data-bs-dismiss="modal">Select seats</button> :<button onClick={()=>{
                 handleSelection(seats);
                 update(seats)
                 setTimeout(()=>{
                    history.push(`/seating/`+bookingId);
                 },3000);
                 
                 
                 
                 



             }}  className="btn btn-danger select-seat-btn" data-bs-dismiss="modal">Select seats</button>}
             
          </div>
      </div>
  )
}