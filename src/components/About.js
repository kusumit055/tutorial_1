import React from 'react'

export default function About(props) {
    // const [insides,upsetbtn] = useState({
    //     border : "1px solid white",
    //     color : "white",
    //     backgroundColor : "blue"
    // })

let insides = {
  color : props.mode === 'dark' ? 'white' :'#042743',
  backgroundColor : props.mode  === 'dark' ? 'rgb(36 74 104)' : 'white'
}

    // const togglebtn = () =>{
    //     if(insides.color === 'white'){
    //         upsetbtn({
    //             color : "yellow",
    //             backgroundColor : "#7c18da"
    //         })
    //     }
    //     else{
    //         upsetbtn({
    //             color : "white",
    //             backgroundColor : "blue"
    //         })
    //     }
    // }
    // let stylels = {
    //     border: "1px solid red",
    //     color : "blue",
    //     backgroundColor : "brown"
    // }
   
  return (
    <div className='container' style={{color : props.mode === 'dark'? 'white':'#042743'}}>
        <h1>{props.title}</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={insides}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={insides} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={insides}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={insides} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={insides}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={insides} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button onClick={togglebtn} className='changes btn btn-primary'>change</button> */}
</div>
  )
}
