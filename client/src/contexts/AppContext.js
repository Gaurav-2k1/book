import {createContext, useState} from 'react';


export const AppContext = createContext({});


export const AppContextProvider=({children})=>{

    const [city,setCity]=useState("bangalore");

    
    const handleChange = (newCity)=>{
        setCity(newCity)
    }
    return <AppContext.Provider value={{city,handleChange}}>{children}</AppContext.Provider>
}

