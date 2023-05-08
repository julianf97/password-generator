import { createContext } from "react"
import { useState } from 'react';
import React from 'react';


export const ValueContext = createContext();


export const ValueProvider = ( { children } ) => {

    const [data, setData] = useState(8)
    const [porcentaje, setPorcentaje] = useState(0)
  

    return(
        
        <ValueContext.Provider value={{
            data,
            setData,
            porcentaje, 
            setPorcentaje
          }}>
            {children}
        </ValueContext.Provider>
    )

}