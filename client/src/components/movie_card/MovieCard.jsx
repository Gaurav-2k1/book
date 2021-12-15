import { useEffect } from 'react';
import '../../style/movieCard.css';

export default function ({title,image,tag,headingColor,subHeadColor}){
    return(<>            
            <div className="container holder" >
                <img className="rounded mx-auto d-block thumbnail" src={image} alt=""/>
                <p className='text_sub_2' style={{color:headingColor}}>{title}</p>
                <p className='body1' style={{color:subHeadColor}}>{tag}</p>
            </div>
        </>)
}