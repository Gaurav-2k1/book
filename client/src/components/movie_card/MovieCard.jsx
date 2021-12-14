import { useEffect } from 'react';
import '../../style/movieCard.css';

export default function ({title,image,tag}){
    return(<>            
            <div className="container holder" >
                <img className="rounded mx-auto d-block thumbnail" src={image}/>
                <p className='text_sub_2'>{title}</p>
                <p className='body1'>{tag}</p>
            </div>
        </>)
}