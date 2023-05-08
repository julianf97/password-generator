import { createContext } from "react"
import { useState } from 'react';
import React from 'react';


export const GenerationContext = createContext();


export const GenerationProvider = ( { children } ) => {

    const [copiado, setCopiado] = useState(false)
    const [checkLower, setCheckLower] = useState(false)
    const [checkUpper, setCheckUpper] = useState(false)
    const [checkNumber, setCheckNumber] = useState(false)
    const [checkSymbol, setCheckSymbol] = useState(false)
    const [ alert, setAlert ] = useState()



  

    return(
        
        <GenerationContext.Provider value={{
            copiado,
            checkLower,
            checkUpper, 
            checkNumber,
            checkSymbol,
            alert,
            setCopiado,
            setCheckLower,
            setCheckUpper,
            setCheckNumber,
            setCheckSymbol,
            setAlert,

          }}>
            {children}
        </GenerationContext.Provider>
    )

}