import { nanoid } from "nanoid"

export const Bookcast = ({item})=>{
  // console.log("item",item)
    return (
        <>
        {item.map((cast)=>(
          <div className="col-2 cast-col text-center" key={nanoid(5)}>
            <div className="cast-img-div">
            <img src={cast.img} className="cast-img" alt=""/>
            </div>
            <div className="mt-1" style={{color:"#000000",fontSize:"16px"}}>{cast.name}</div>
            <div style={{color:"#717171"}}>as<span style ={{marginLeft:"5px",color:"#717171",fontSize:"14px"}}>{cast.role}</span></div>
            <div className="col-1"></div>
          </div>
        ))}
        </>
    )
}