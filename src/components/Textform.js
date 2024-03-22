import React, {useState} from 'react'

export default function Textform(props) {
    const [set, upset] =useState("welcome to subharti university");
    const headerup = () =>{
// console.log("hello .................");
let headups = set.toUpperCase();
upset(headups);
props.showalert("dark mode has been enabled", "success");

    }
    const headerText = (event) =>{
        // console.log("react");
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
       
        navigator.clipboard.writeText(set);
    }
    const extra = () =>{
        let space = set.split(/[ ]+/);
        upset(space.join(" "))
    }
    return (
        <div>
            <div className="container">
                <h1 className={`text-${props.mode === 'black'?'light':'black'}`}>{props.txt}</h1>
                <textarea id="textbox" value={set} onChange={headerText} 
                style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color : props.mode === 'light' ? 'green':'blue' }}
                rows="10">{props.txt}</textarea>
                <div className='flexbtn'>
                    <button onClick={headerup} className='btn btn-primary'>clickup</button>
                    <button onClick={headdown} className='btn btn-primary'>clickdown</button>
                    <button onClick={clear} className='btn btn-primary'>clearAll</button>
                    <button onClick={select} className='btn btn-primary'>selectall</button>
                    <button onClick={extra} className='btn btn-primary'>Extra Space</button>
                    <button className='btn btn-primary'>clickup</button>
                </div>
            </div>
<p style={{color : props.mode === 'dark'? 'white':'#042743'}}>words {set.split(/\s+/).filter((element) => {return element.length !== 0}).length} <b></b> and characters {set.length}</p>
<p style={{color : props.mode === 'dark' ? 'white' :'#042743'}} > {0.008 * set.split(" ").length} minute times</p>

<p style={{color : props.mode === 'dark' ? 'white' :'green'}} >{set.length> 0 ? set : "Enter the details"} </p>
        </div>
    )
}
