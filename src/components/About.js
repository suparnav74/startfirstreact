//import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setmystyle] = useState(
    //     {
    //     color : 'black',
    //     backgroundColor : 'white'
    //     }
    //  )
     
    //  const [btnText, setBtnText] = useState("Enable Dark Mode")
    //  const toggleStyle = () =>{
    //     if(mystyle.color === 'black')
    //     {
    //         setmystyle(
    //             {
    //                 color : 'white',
    //                 backgroundColor : 'black',
    //                 border :'2px solid white'
    //             }   
    //         )
    //         setBtnText("Enable Light Mode")
    //     }
    //     else
    //     {
    //         setmystyle(
    //             {
    //                 color : 'black',
    //                 backgroundColor : 'white'
    //             }   
    //         )
    //         setBtnText("Enable Dark Mode")
    //     }
    //  }
    
    let mystyle ={
        color: props.mode==='dark'? 'white':'#102443',
        backgroundColor: props.mode==='dark'? '#102443':'white'
    }
  return (
    <div className="container">
        <h1 className="my-3" style= {{color: props.mode==='dark'? 'white':'#102443'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently.Be with word count and character count. 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Textutils is a free character counter tool that provides instant character count & word count 
                    statistics for a given text. Textutils reports the number of words and characters. Thus it is 
                    suitable for writing text with words and character limit. 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}> 
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This word counter software work in any web browser such as Chrome, Firefox, Internet explorer, Opera, 
                    Safari.It suits to count characters in facebook, blog, books, excel document,pdf document,essays etc. 
            </div>
            </div>
        </div>
        {/* <div className="container my-3">
          <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
        
        </div>
    </div>
  )
}
