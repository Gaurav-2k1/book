import { nanoid } from "nanoid"
import "../../style/selectseat.css"
export const Selectseat = ()=>{
    
  return (
      <div className="select-seat-container">
          <div className="select-seat-content">
             <div className="how-many-seat">How Many Seats?</div>
             <img src={"cycle.png"} alt="" className="cycle-img"/>
             <div className="btn-div-cont">
                 {[1,2,3,4,5].map((item)=>(
                     <button className="btn ml-3 me-3" key={nanoid(5)}>{item}</button>
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
             <button className="btn btn-danger select-seat-btn">Select seats</button>
          </div>
      </div>
  )
}