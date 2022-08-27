import React from "react";  
import { useState, useEffect} from "react"; 

 
export default function Meme(props){
    
    const [memeImage,setMemeImage] = useState({
        topText : "",
        bottomText : "",
        image : "https://i.imgflip.com/24y43o.jpg"
    }) 

    // https://api.imgflip.com/get_memes

    useEffect(() => {

        // Use full use effect a async we face a problem like we did not cleanup a sideeffect of useEffect
        async function getMeme(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImage(data.data.memes)
        }
        getMeme()
        // Side effect clean function
        // return function{

        // }
                        // Without async
                            // fetch("https://api.imgflip.com/get_memes")
                            // .then(res => res.json())
                            // .then(data => setAllMemeImage(data.data.memes))
    },[])

    const [allMemeImage,setAllMemeImage] = useState(() => console.log("meme")) 

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImage.length)
        const url = allMemeImage[randomNumber].url

        setMemeImage(prevState => ({
            ...prevState,
            image : url
        })) 
    }

    function handlechange(e){
        const {name,value} = e.target
        setMemeImage(prevData =>{
            return{
                ...prevData,
                [name] : value
            }
        })
    }
    // Plus and minus function 

    // let [count,setCount] = React.useState(0) 

    // function minus(){
    //     setCount((prevCount) => {
    //         console.log(prevCount)
    //         return prevCount-1
    //     }) 
    // } 

    // function plus(){
    //     setCount(prevCount => prevCount+1)
    // } 

    return (
        <div className={props.darkMode ? "container col-sm-12 mt-1  body--dark" : "container mt-1 col-sm-12  "} >
            <br/><br/><div className="row">
                <div className="col-sm-6 text-center form--input">
                    <input 
                        type="text"
                        placeholder="Toptext"
                        name="topText"
                        value={memeImage.topText}
                        onChange={handlechange}

                    /> 
                </div><br/>
                <div className="col-sm-6 text-center form--input">
                    <input 
                        type="text"
                        placeholder="Bottomtext" 
                        name="bottomText"
                        value={memeImage.bottomText}
                        onChange={handlechange}
                    />
                </div>
            </div>
            <div className="mt-5 col-sm-12 text-center">
                <button className="btn btn-outline-primary form--button" onClick={getMemeImage}>
                    Get a new meme image <i className="fa fa-image"></i></button>
            </div>
            <div className="container text-center mt-4 meme">
                <img src={memeImage.image} alt="meme 2"></img>
                <h2 className="meme--text top" >{memeImage.topText}</h2>
                <h2 className="meme--text bottom" >{memeImage.bottomText}</h2>
            </div> 

            {/* Testing purpose  */}
            {/* <div>
                <button className="btn btn-primary" onClick={minus}>Minus</button>
            </div>
            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <button className="btn btn-success" onClick={plus}>Plus</button>
            </div> */}
        </div>
    )
} 