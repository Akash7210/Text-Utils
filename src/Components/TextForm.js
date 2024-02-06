import React,{useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked ")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>{
 
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    
    const handleOnChange=(event)=>{
        console.log("Onchange  was clicked ")
        setText(event.target.value)
    }
    const handleCopyClick=()=>{
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied Successfully","success");
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to upper case </button>
<button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase </button>
<button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy </button>


    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
<h1>Your text Summary</h1>
<p>{text.split(" ").length} words and{text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minitus to Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in abhove text area to preview here"}</p>
    </div>
    </>
  )
}
