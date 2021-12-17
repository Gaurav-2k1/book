import "../../style/terms.css"
import { Selectseat } from "./Selectseat"
export const Terms = ()=>{
  
    return (
        <div className="terms-cont p-1">
            <div className="terms-content">
             <div className="terms-text">Terms & Conditions</div>
             <div button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{marginLeft:"-20px"}}></div>
             <div className="conditions-description">
             <div>Pre-booked Food & Beverages have to be collected by the patron from the F&B counter by showing the Booking ID</div>
             <ol className="terms-text-list">
                 <li> As per Cinema policy, Tickets are mandatory for children above 3yrs age.</li>
                 <li> Cinema staff may check your vaccination status on Aarogya Setu App/Vaccine certificate before allowing entry inside the premises</li>
                 <li>For safety purposes, wearing mask is mandatory..</li>
                 <li>Patrons with fever (body temperature {`>`} 99.2 F) or other symptoms like : cough etc. will not be allowed entry and are requested to stay at home.</li>
                 <li>Ticket is compulsory for children of 3 years & above.</li>
                 <li>Incase the ticket is lost or misplaced, duplicate ticket will not be issued.</li>
                 <li>Outside food & beverages are not allowed inside the cinema premises.</li>
                 <li>Decision(s) taken by Cinepolis management is final & abiding.</li>
                 <li> For 3D movies, ticket price includes charges towards usage of 3D glasses.</li>
                 <li>Patrons under the age of 18 years will not be allowed to watch the `A` rated movie.</li>
             </ol>
             </div>
             <button className="btn cancel-btn" data-bs-dismiss="modal">Cancel</button>
             <button  className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">Submit</button>
             </div>
        </div>
    )
}