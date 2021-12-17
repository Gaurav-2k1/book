import axios from "axios";
import { useEffect, useState } from "react";
import "../../style/slotbooking.css";
import { Selectseat } from "../Seat/Selectseat";
import { Terms } from "../Seat/Terms";

export const Slotbooking = () => {
  const [movie, setMovie] = useState([]);
  const [price,setPrice] = useState("");
  const [language,setLangugae] = useState("");
  const [timearr,setTimearr] = useState([]);
  let arr = [6,7,8,9,10,11,12,13,14,18,20]

  const handleSortbyTime = (e)=>{
  
      if(e.target.value==="morning") {
        let sorted_time_arr = arr.filter(item=>{
          if(item>6 && item <12){
            return item
          }
        });
     
        setTimearr(sorted_time_arr)
      }
     else if(e.target.value==="afternoon"){
        let sorted_time_arr = arr.filter(item=>{
          if(item>11 && item <=16){
            return item
          }
        });
        setTimearr(sorted_time_arr)
     }

     else if(e.target.value==="evening"){
      let sorted_time_arr = arr.filter(item=>{
        if(item>16 && item <=19){
          return item
        }
      });
      setTimearr(sorted_time_arr)
   }
   else if(e.target.value==="night"){
    let sorted_time_arr = arr.filter(item=>{
      if(item>19 && item <22){
        return item
      }
    });
    setTimearr(sorted_time_arr)
 }
  }

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let { data } = await axios.get("http://localhost:3004/movies");
    setMovie(data);
  };
  return (
    <div className="container-fluid">
      {movie.map((item) => (
        <div className="row booking-slot-heading-cont text-white">
          <div className="col-6 booking-slot-heading-detail">
            <div className="text-white booking-slot-title">{item.title}</div>
            <div className="d-inline">{item.certificate}</div>
            {item.genre.map((genre) => (
              <div className="d-inline m-1 slot-genre">{genre}</div>
            ))}
            <div className="d-inline m-1 slot-duration">{item.duration}</div>
            <div className="d-inline m-1">{item.release}</div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <div className="row">
              {item.cast.map((role) => (
                <div className="col text-center role-img-and-name">
                  <img src={role.img} alt="" />
                  <div className="mt-1 text-white">{role.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="row box-2 me-3 ml-3">
        <div className="col-md-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <button className="btn slot-date-btn">{`${item}`}</button>
          ))}
        </div>
        <div className="col-md-8 text-end">
          <select>
            <option>Hindi 2D</option>
            <option>English 3D</option>
          </select>
          <select>
            <option>Filter By Price</option>
            <option>Rs0-100</option>
            <option>Rs 101-200</option>
            <option>Rs 301-350</option>
            <option>Above Rs 350</option>
          </select>
          <select onChange={handleSortbyTime}>
            <option>Filter by Timings</option>
            <option value="morning">Morning 12.00-11.59am</option>
            <option value="afternoon">Afternoon 12.00-3.59pm</option>
            <option value="evening">Evening 4.00-6.59pm</option> 
            <option value="night">Night7.00-11.59pm</option>
          </select>
        </div>
      </div>
      <div className="row mt-1 p-2 mobile-ticket-avail">
        <div className="col-3 m-tickets">
          <img src={"mobile.png"} alt="" className="me-2" />
          <span>M-Tickets Available</span>
        </div>
        <div className="col-2">|</div>
        <div className="col-3">Food Beverages Available</div>
        <div className="col-4 text-end close-sign">X</div>
      </div>
      <div className="row slot-box-3 m-2">
        <div className="col-8"></div>
        <div className="col-4">
          <div className="row">
            <div className="col">
              <img src={"greendot.png"} alt="" className="me-1 dot-img" />
              <span>Available</span>
            </div>
            <div className="col">
              <img src={"reddot.png"} alt="" className=" me-1 dot-img" />
              <span>Fast Filling</span>
            </div>
            <div className="col ">
              <img src={"greendot.png"} alt="" className=" me-1 dot-img" />
              <span>Subtitle Languages</span>
            </div>
          </div>
        </div>
        <hr className="mt-2" />
      </div>
      {[1,2,2].map((rows) => (
        <div className="row box-4 me-2">
          <div className="col-4">
            <img src={"blankheart.png"} alt="" />
            <span className="m-3 theatre-name">Pvr: Bengulru</span>
            <div>
              <img src={"mobile.png"} alt="" />
              <span className="m-ticket">M-Tickets</span>
              <img className="f-b" src={"Mobile.png"} alt="" />
              <span>F&B</span>
            </div>
          </div>
          <div className="col-8">
            {timearr.map((item) => (
              //    <button className="btn  m-3 slot-time" onClick={handleCount}>{time}AM</button>
              <button
                type="button"
                className="btn  m-3 slot-time"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {item}AM
              </button>
            ))}
            <div className=" cancellation-avilabe-div">
              <img src={"greendot.png"} />
              <span>Cancellation Available</span>
            </div>
          </div>
        </div>
      ))}
      {/* ------------modal-1----------    */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {" "}
            <Terms />
          </div>
        </div>
      </div>

      {/* --------------modal-2----------- */}
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {" "}
            <Selectseat/>
          </div>
        </div>
      </div>
    </div>
  );
};
