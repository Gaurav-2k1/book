import "./Summary.css"
import Product from "./product_comp";
function Summary()
{
    return(
        <div>
        {/* top */}
            <div className="maindiv">

                <div>
                    <div className="Top_first_div">
                        <p>The Eternals</p>
                        <p>PVR: Vinayak, Bangaluru</p>
                    </div>
                </div>

                <div className="Top_second_div">
                    <p>2 Tickets </p>
                </div>

            </div>
            <br/>
        {/* top */}

        {/* mid */}
        <div className="middiv">
            {/* left */}
            <div className="mid_left_div">
                <div className="mid_left_text">
                    <h1>Grab a <span style={{color:"red",fontWeight:"10"}}>bite!</span></h1>
                    <p style={{marginTop:"-20px"}}>Prebook Your Meal and Save More!</p>
                </div>
                <div className="top_button">
                    <button>ALL</button>
                    <button>BEVERAGES</button>
                    <button>COMBOS</button>
                    <button>SNACKS</button>
                    <button>POPCORN</button>
                </div>

                <div className="product_item">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>

            {/* right */}
            <div className="mid_right_div">
                <h4 style={{color:"red",marginLeft:"30px"}}>BOOKING SUMMARY</h4>
                <div className="price_1">
                    <span>EXEC - H1 (1 Ticket)</span>
                    <span>Rs. 200.00</span>
                </div>

                <div className="price_2">
                    <span>Convenience fees</span>
                    <span>Rs. 34.22</span>
                </div>
                <hr></hr>
                <div className="total">
                    <span>Sub total</span>
                    <span>Rs. 34.22</span>
                </div>

                <div className="discount">

                    <div>
                        <p style={{color:"black", fontWeight:"bold"}}>Contribution to BookASmile</p>
                        <p style={{color:"gray"}}>(₹1 per ticket has been added)</p>
                        <span style={{color:"gray"}}>VIEW T&C</span>
                    </div>
                        
                    <div>
                        <p style={{color:"black", fontWeight:"bold"}}>Re. 1</p>
                        <p style={{color:"red"}}>Remove</p>
                    </div>

                </div>
                <span style={{marginLeft:"40px"}}>Your current state is <span style={{color:"red",fontWeight:"bold"}}>karnataka</span> </span>

                <div className="Amount">
                    <p style={{fontWeight:"bold"}}>TOTAL: Rs. 255.22</p>
                    <p style={{fontWeight:"bold"}}>Proceed</p>
                </div>
            </div>

            
        </div>
        {/* mid */}
        </div>
    )
}
export default Summary;