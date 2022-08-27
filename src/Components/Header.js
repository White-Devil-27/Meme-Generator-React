import React from "react"; 
import meme from "../images/meme.png" 

 
export default function Header(props){

    return (
            <div className= {props.darkMode ? "container col-sm-12 mt-1 box--dark" : "container col-sm-12 mt-1 box--light"}>
                <div className="row">
                    <div className="col-sm-1">
                        <img src={meme} width={100} alt="meme"></img>
                    </div>
                    <div className="col-sm-9 mt-4 text-center">
                        <h2>Meme Generator</h2>
                    </div>
                    <div className=" col-sm-2 form-check mt-4 icon form-switch">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            name="dark"
                            id="flexSwitchCheckChecked" 
                            value={props.darkMode}
                            checked ={props.darkMode}
                            onClick={props.Dark}
                        />
                        <label className="form-check-label label " htmlFor="flexSwitchCheckChecked">{props.darkMode ? "Dark" : "Light" }</label>
                    </div>
                </div>
            </div> 
        ) 

} 