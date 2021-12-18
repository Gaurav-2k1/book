import "./Summary.css"
// import Popcorn '';
function Product()
{
    return (
      <>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Popcorn001.png`} alt="" />
          <div className="product_dis">
            <div>
              <h5 style={{ marginTop: "1px" }}>Large Salted Popcorn</h5>
              <p
                style={{ marginTop: "20px", fontSize: "12px", color: "gray" }}
              >
                Large Salted Popcorn
              </p>
            </div>
            <div>
               {/* <div className="veg"> 
                    <img src={"Veg.png"} alt="" />
               </div> */}
              <button className="product_but">ADD</button>
            </div>
          </div>
        </div>


        
      </>
    );
}
export default Product