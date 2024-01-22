import React, {useState} from 'react'

export default function Textform(props) {
    const [set, upset] =useState("welcome to subharti university");
    const headerup = () =>{
console.log("hello .................");
let headups = set.toUpperCase();
upset(headups);
props.showalert("dark mode has been enabled", "success");

    }
    const headerText = (event) =>{
        console.log("react");
        upset(event.target.value);
    }
    const headdown = () =>{
        let downs = set.toLowerCase();
        upset(downs);
       props.showalert("dark mode has been enabled", "success");

    }
    const clear = () =>{
        let clears = '';
        upset(clears);
        props.showalert("dark mode has been enabled", "success");

    }
    const select = ()=>{
        let box = document.getElementById("textbox");
        box.select();
        navigator.clipboard.writeText(box.value);
    }
    const extra = () =>{
        let space = set.split(/[ ]+/);
        upset(space.join(" "))
    }
    return (
        <div>
            <div className="container">
                <h1 className={`text-${props.mode === 'black'?'light':'black'}`}>{props.txt}</h1>
                <textarea id="textbox" value={set} onChange={headerText} rows="10">{props.txt}</textarea>
                <div className='flexbtn'>
                    <button onClick={headerup} className='btn btn-primary'>clickup</button>
                    <button onClick={headdown} className='btn btn-primary'>clickdown</button>
                    <button onClick={clear} className='btn btn-primary'>clearAll</button>
                    <button onClick={select} className='btn btn-primary'>selectall</button>
                    <button onClick={extra} className='btn btn-primary'>Extra Space</button>
                    <button className='btn btn-primary'>clickup</button>
                </div>
            </div>

        </div>
    )
}
