import React,{useState} from 'react'


export default function FormText(props) {
    const handleUpClick = () =>{
         console.log("Uppercase was clicked" + text);
        //  setText("You have clicked on HandleUp");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase",'success');
    }

    const handleLoClick = () =>{
      console.log("Lowercase was clicked" + text);
     //  setText("You have clicked on HandleUp");
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lowercase",'success');
    }
    const handleClearClick = () =>{
      // console.log("Lowercase was clicked" + text);
      setText('')
      props.showAlert("Text cleared",'success');
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
        
    } 

    const handleTitleClick = () =>{
      let newText = text.split(" ")
      .map(w=>w[0].toUpperCase() + w.substring(1).toLowerCase()).join(" ");
      setText(newText)
      props.showAlert("Converted to Titlecase",'success');
      }
     
    const handleCopy =()=>{
      //  let text = document.getElementById("myBox");
      //  text.select()
       navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
       props.showAlert("Copied to clipboard",'success');
    }

    const handleExtraSpace =()=>{
       let newText = text.split(/[  ]+/);
       setText(newText.join(" "))
       props.showAlert("Removed extra spaces",'success');
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}

        
        <h1 className='mb-1'>{props.heading}</h1>
        <div className="mb-3">
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="7" style={{
          backgroundColor :props.mode==='dark'?'#3e3d5b':'white',
          color:props.mode==='dark'?'white':'black'
        }}></textarea>
       
        </div>
         {/* for only enable dark and light mode using switch */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        
         {/* for toggle color using radio buttons */}
        {/* <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick}>Uppercase</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLoClick}>Lowercase</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleTitleClick}>Title Case</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button> */}

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#270c53'}}>
         <h1>Your Text Summery</h1>
         {/* <p>{text.length===0?0:text.trim().split(" ").length} Words and {text.trim().length} Characters</p> */}
         <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.trim().length} Characters</p>
         <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
