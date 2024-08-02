import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert it to  uppercase!", "success");
  }

  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert it to  lowercase!", "success");
  }

  const handleclClick =() =>{
    let newText = '';
    setText(newText);
    props.showAlert("CLear text!", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipbord!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleExtraSpaces = (event) => {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space from text!", "success");
  }


  const[text, setText] = useState(' ');
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'Grey':'white'  , color:props.mode=== 'dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1"   onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-1"   onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-1"   onClick={handleclClick}>Clear Text</button>
     <button className="btn btn-primary mx-1"   onClick={handleCopy}>Copy</button>
     <button className="btn btn-primary mx-1"   onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
     <div className="container my-3" style={{color: (props.mode === 'dark')? 'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length } Minitues read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
     </div>
     </>
  )
}
