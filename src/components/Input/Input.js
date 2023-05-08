import { useContext } from "react"
import { ValueContext } from "../../Context/ValueContext"
import React from "react"
import './_input.scss';



export const Input = () => {

    const { data, setData } = useContext(ValueContext)
    
    return(
        <div className="inputSlider">
            <input className="slider" type="range" min={0} max={15} value={data} 
            
            onChange={
                (e) => {
                    setData(e.target.value)
                }
            }

            ></input>
        </div>
    )

}