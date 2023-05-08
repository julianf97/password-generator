import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { ValueContext } from '../../Context/ValueContext'
import { GenerationContext } from '../../Context/GenerationContext';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters';

import React from 'react';

import './_generator.scss';




export const Generator = () => {

    const { data, setData } = useContext(ValueContext)
    const { copiado, checkLower, checkUpper, checkNumber, checkSymbol, setCopiado, setCheckLower, setCheckUpper, setCheckNumber, setCheckSymbol, alert, setAlert} = useContext(GenerationContext)

    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)


    const [ password, setPassword ] = useState("")
    const [ hayPassword, setHayPassword ] = useState(false)



   
    if(checkLower === false && checkUpper === false && checkNumber === false && checkSymbol === false){
        setAlert(true)
    } else {
        setAlert(false)

    }

    const copyToClipboard = () => {
        const newTextArea = document.createElement("textarea")
        newTextArea.innerHTML = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand("copy")
        newTextArea.remove()
    }

    const handleCopy = () => {
        setCopiado(true)
        copyToClipboard()
    }

    const handleCheckLower = () => {
        if( checkLower === false ){
            setCheckLower(true)
            setIncludeLowercase(true)
        } else {
            setCheckLower(false)
            setIncludeLowercase(false)
        }
    }

    const handleCheckUpper = () => {
        if( checkUpper === false ){
            setCheckUpper(true)
            setIncludeUppercase(true)
        } else {
            setCheckUpper(false)
            setIncludeUppercase(false)
        }
    }

    const handleCheckNumber = () => {
        if( checkNumber === false ){
            setCheckNumber(true)
            setIncludeNumbers(true)
        } else {
            setCheckNumber(false)
            setIncludeNumbers(false)
        }
    }

    const handleCheckSymbol = () => {
        if( checkSymbol === false ){
            setCheckSymbol(true)
            setIncludeSymbols(true)
        } else {
            setCheckSymbol(false)
            setIncludeSymbols(false)
        }
    }

    const handleGeneratePassword = (e) => {
        let characterList = ""

        if (includeLowercase) {
            characterList = characterList + lowerCaseLetters
          }
      
          if (includeUppercase) {
            characterList = characterList + upperCaseLetters
          }
      
          if (includeNumbers) {
            characterList = characterList + numbers
          }
      
          if (includeSymbols) {
            characterList = characterList + specialCharacters
          }

        setPassword(createPassword(characterList))
    }
       
    const createPassword = (characterList) => {
        let password = ""
        const characterListLenght = characterList.length

        for(let i = 0; i < data; i++){
            const characterIndex = Math.round(Math.random() * characterListLenght)
            password = password + characterList.charAt(characterIndex)
        }

        setCopiado(false)
        setHayPassword(true)

        return password
    }

    return (
        <main className='main'>
            <div className='contenedorTitulo'>
                <h1 className='tituloApp'>Password Generator</h1>
            </div>
            <div className='contenedorPassword'>
                <div className='contenedorInteriorGral'>
                    <div className='contenedorInteriorPassword'>
                        {
                            hayPassword ? <p id='fieldText' className='password blanco'>{password}</p>
                                        : <p id='fieldText' className='password'>P4$5W0rD!</p>
                        }
                    </div>
                    <div className='copy flex'>
                        {
                            copiado ? <p id='copyMsg' className='fs-3 uppercase text-green'>COPIED</p> 
                                    : <p></p>
                        }
                        <div onClick={handleCopy}  className='contenedorCopyIcon'>
                            <svg id='copyIcon' className='copyIcon' width={21} height={24}>
                                <FontAwesomeIcon className="iconCopy" icon={faCopy}/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contenedorOpciones'>
                <div className='contenedorSlider'>
                    <div className='contenedorLabel'>
                        <label className='sliderlabel flex'> 
                            Character Length
                        </label>
                        <span className='sliderValue' id='sliderValue'>{data}</span>
                    </div>
                    <div className='contenedorInputSlider'>
                        <input className="slider" type="range" min={5} max={15} value={data} 
                            onChange={
                                
                                (e) => {
                                setData(e.target.value)
                                let target = e.target;
      
                                const min = target.min;
                                const max = target.max;
                                const val = target.value;
                              
                                target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
                                } 
                            }

                            style={
                                
                                { backgroundSize: `${33}% 100%` }
                            }
    
                        ></input>
                    </div>
                </div>
                <div className='checkboxes flex'>
                    <div className='contenedorInternoChecks'>
                        <label className='checkboxLabel contenedorCheckSup'>
                            <div className='contenedorCheckSup' onClick={ () => {    handleCheckLower(); console.log(checkLower, "Lower")}}>
                                {
                                    checkLower ? <div type='checkbox' className='contenedorCheckActive'>
                                                    <FontAwesomeIcon className='iconCopyActive' icon={faCheck}/>
                                                 </div>
                                            : <div type='checkbox' className='contenedorCheck'></div>
                                }
                            </div>
                            <span className='claseLabel'> Include Lowercase Letters </span>
                        </label>
                        <label  className='checkboxLabel contenedorCheckSup'>
                            <div className='contenedorCheckSup' onClick={ () => {    handleCheckUpper(); console.log(checkUpper, "Upper")}}>
                                {
                                    checkUpper ? <div type='checkbox' className='contenedorCheckActive'>
                                                    <FontAwesomeIcon className='iconCopyActive' icon={faCheck}/>
                                                </div>
                                            : <div type='checkbox' className='contenedorCheck'></div>
                                }
                            </div>
                            <span className='claseLabel'>Include Uppercase Letters </span>
                        </label>
                        <label className='checkboxLabel contenedorCheckSup'>
                            <div className='contenedorCheckSup' onClick={ () => {    handleCheckNumber(); console.log(checkNumber, "Number")}}>
                                {
                                    checkNumber ? <div type='checkbox' className='contenedorCheckActive'>
                                                    <FontAwesomeIcon className='iconCopyActive' icon={faCheck}/>
                                                </div>
                                            : <div type='checkbox' className='contenedorCheck'></div>
                                }
                            </div>
                            <span className='claseLabel'>Include Numbers</span>
                        </label>
                        <label className='checkboxLabel contenedorCheckSup'>
                            <div className='contenedorCheckSup' onClick={ () => {    handleCheckSymbol(); console.log(checkSymbol, "Symbol")}}>
                                {
                                    checkSymbol ? <div type='checkbox' className='contenedorCheckActive'>
                                                    <FontAwesomeIcon className='iconCopyActive' icon={faCheck}/>
                                                </div>
                                            : <div type='checkbox' className='contenedorCheck'></div>
                                }
                            </div>
                            <span className='claseLabel'>Include Symbols</span>
                        </label>
                    </div>
                </div>
                <div className='strength flex'>
                    <div className='internoStrength'>
                        <h2 className='fs-3 text grey uppercase'>STRENGTH</h2>
                        <div className='strengthLv1 flex'>
                        {
                            data <= 6 && <p className='fs-2 text-white uppercase tooWeak' id='levelTxt'>TOO WEAK!</p>
                        }
                        {
                            data >  6 && data <=  9 && <p className='fs-2 text-white uppercase' id='levelTxt'>WEAK</p>
                        }
                        {
                            data >  9 && data <=  10 && <p className='fs-2 text-white uppercase' id='levelTxt'>MEDIUM</p>
                        }
                        {
                            data >=  11 &&  <p className='fs-2 text-white uppercase' id='levelTxt'>STRONG</p>
                        }
                        {
                            data <= 6 && 
                            <div className='contenedorBarras'> 
                                <div id='bar1' className='bars bar1 orangeColor'></div>
                                <div id='bar2' className='bars bar2'></div>
                                <div id='bar3' className='bars bar3'></div>
                                <div id='bar4' className='bars bar4'></div>
                            </div>
                        }
                        {
                            data >  6 && data <=  9 && 
                            <div className='contenedorBarras'> 
                                <div id='bar1' className='bars bar1 orangeColor'></div>
                                <div id='bar2' className='bars bar2 orangeColor'></div>
                                <div id='bar3' className='bars bar3'></div>
                                <div id='bar4' className='bars bar4'></div>
                            </div>
             
                        }
                        {
                            data >  9 && data <=  10 &&
                            <div className='contenedorBarras'> 
                                <div id='bar1' className='bars bar1 yellowColor'></div>
                                <div id='bar2' className='bars bar2 yellowColor'></div>
                                <div id='bar3' className='bars bar3 yellowColor'></div>
                                <div id='bar4' className='bars bar4'></div>
                            </div>
             
                        }
                        {
                            data >=  11 &&
                            <div className='contenedorBarras'> 
                                <div id='bar1' className='bars bar1 greenColor'></div>
                                <div id='bar2' className='bars bar2 greenColor'></div>
                                <div id='bar3' className='bars bar3 greenColor'></div>
                                <div id='bar4' className='bars bar4 greenColor'></div>
                            </div>
             
                        }
                        </div>
                    </div>
                </div>
                <div className='contenedorBtn'>
                    {
                        alert ? <button disabled onClick={handleGeneratePassword} id='generateBtn' className='uppercase fs-3   bg-green text-dark button'>
                        GENERATE
                        <svg className='checkmark' width={12} height={12}>
                            <FontAwesomeIcon className="iconCopy" icon={ faArrowRight}/>
                        </svg>
                        </button> 
                        : <button onClick={handleGeneratePassword} id='generateBtn' className='uppercase fs-3   bg-green text-dark button'>
                        GENERATE
                        <svg className='checkmark' width={12} height={12}>
                            <FontAwesomeIcon className="iconCopy" icon={ faArrowRight}/>
                        </svg>
                        </button> 
                    }
                </div>
            </div>
            {
                alert ? <p id="alert" className="fs-3 alert">Please select one or more options</p>
                        : <p></p>
            }
            
        </main>
    )
}