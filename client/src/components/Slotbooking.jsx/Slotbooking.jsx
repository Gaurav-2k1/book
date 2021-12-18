import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/slotbooking.css";
import Footer from "../footer/Footer";
import { Selectseat } from "../Seat/Selectseat";
import { Terms } from "../Seat/Terms";

export const Slotbooking = () => {
  const [movie, setMovie] = useState([]);
  const [timearr, setTimearr] = useState([]);
  const [slottime, setSlottime] = useState([]);
  const { id,bookingId } = useParams();
  const [playingTheaters,setPlayingTheaters]=useState([]);
  const [selectedTimeSlot,setSelectedTimeSlot]=useState("");
  const [selectedTheater,setSelectedTheater]=useState("");
  const [filtered,setFiltered]=useState([]);
  const [selectedSeats,setSelectedSeats]=useState(0);
  var serverData=[];



  useEffect(()=>{
    getTheaters(id);
  },[]);

  async function updateBooking(seats)
  {

      let resp=await axios.patch(`http://localhost:5000/book/update/${bookingId}`,{
          howmanySeats:seats,
          theater:selectedTheater,
          timeOfShow:selectedTimeSlot,
          dateOfBooking:new Date().getUTCDate()
      });

      console.log("After updating seats Data",resp);



  }

  async function getTheaters(movieId)
  { 

      let response = await axios.get("http://localhost:5000/theater/getTheaters/"+movieId);

      //console.log("movie is playing in theaters",response.data);
      setPlayingTheaters(response.data);      


  }

  console.log("Current Booking id",bookingId);
 console.log("id",id)
  const handleSortbyTime = async (e) => {
    // console.log(e.target.value);
    await getTheaters(id);
    console.log(e.target.value);
    switch (e.target.value) {
      case "all":
        
        await getTheaters(id);
        break;

      case "morning":
        await getTheaters(id);

      
          let timingsData=playingTheaters.map((obj)=>{

            obj.showTimings.forEach((time,index)=>{
                
                
                 obj.showTimings[index]=Number(time.split(":")[0])
                 
                                
            })

            return obj;
            
            
 
        })


        setPlayingTheaters(timingsData.filter((obj)=>{


            obj.showTimings=obj.showTimings.filter((el)=>{
              if(el > 9 && el <12)
                return true;
            })
            

            return true;
        }));

        

      
         
        /* var sorted_time_arr = slottime.filter((item) => {
          if (item.time > 6 && item.time < 12) {
            return true;
          }
        }) */
        //setTimearr(filter);
        

        break;

      
      case "evening":
        
//       getTheaters(id);

        
      console.log("Getting ServerData",playingTheaters);        
        

          let timingsData3=playingTheaters.map((obj)=>{

            obj.showTimings.forEach((time,index)=>{
                

              console.log("Time",time);
                if(typeof(time)===String)
                 obj.showTimings[index]=Number(time.split(":")[0])
                 
                 
                                
            })

            return obj;
            
            
 
        })


        setPlayingTheaters(timingsData3.filter((obj)=>{


            obj.showTimings=obj.showTimings.filter((el)=>{
              if(el >= 12 && el <=21)
                return true;
            })
            

            return true;
        }));

         
        

        
        
        break;
      default:
      //  await getTheaters(id);
        break;
    }
  };

  useEffect(() => {
    getData();
    //slotFetching();
    getTheaters(id);
    


  }, []);

  //---------getting single movie data-------------//
  const getData = async () => {
    let { data } = await axios.get(`http://localhost:5000/movies/${id}`);
    setMovie(data);
  };
  //-----------fetching the theatres--------------//
  const slotFetching = async () => {
    let { data } = await axios.get("http://localhost:5000/theater");
    console.log("theatre",data)
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
          <div className="col-3"></div>
          <div className="col-3">
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
          {[20, 21, 22, 23, 24].map((item) => (
            <button className="btn slot-date-btn">{`${item}`}</button>
          ))}
        </div>
        <div className="col-md-8 text-end">
          <select>
            <option>Filter By Price</option>
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
          <select onChange={handleSortbyTime} onClick={(e)=>(async ()=>{
            await getTheaters(id);
          })}>
            <option>Filter by Timings</option>
            <option value="all">All Available</option>
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
      { playingTheaters.map((theater) => (
        <div className="row box-4 me-2">
          <div className="col-4">
            <img src={"blankheart.png"} alt="" />
            <span className="m-3 theatre-name">{theater.name}</span>
            <div>
              <img src={"mobile.png"} alt="" />
              <span className="m-ticket">M-Tickets</span>
              <img className="f-b" src={"Mobile.png"} alt="" />
              <span>F&B</span>
            </div>
          </div>
          <div className="col-8">
            {theater.showTimings.map((item) => (
              //    <button className="btn  m-3 slot-time" onClick={handleCount}>{time}AM</button>
              <button

                onClick={()=>{
                  setSelectedTimeSlot(item);
                  setSelectedTheater(theater._id);
                  
                }}
                type="button"
                className="btn  m-3 slot-time"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {item}
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
            <Selectseat handleSelection={setSelectedSeats}  update={updateBooking} />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};
