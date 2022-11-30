import React,{useState} from 'react'

export default function TextForm(props) {
const [texttt, setText] = useState("");

const clickTextupper=()=>{
    // console.log("Click on button");
    let newText = texttt.toUpperCase();
    setText(newText);
    props.alertMessage("Converted to UpperCase","success");
}
const clickTextlower=()=>{
    // console.log("Click on button");
    let newText = texttt.toLowerCase();
    setText(newText);
    props.alertMessage("Converted to LowerCase","success");
}
const chnageText = (e)=>{
    // console.log(e.target);
    setText(e.target.value);
    
}
const clearText = ()=>{
    // console.log(e.target);
    setText("");
    props.alertMessage("Cleared Text","success");
}
const copyText = ()=>{
    let copiedText = document.getElementById("myBox");
    console.log(copiedText.value);
    navigator.clipboard.writeText(copiedText.value);
    props.alertMessage("Copied Text","success");
}
const removeExtraSpaces=()=>{
    setText(texttt.split(" ").filter(function(item){
        return item;
    }).join(" "))
    props.alertMessage("Extra Spaces Removed","success");
}
const [texttt1, prevText] = useState("");
const previewText = ()=>{
    prevText(document.getElementById("myBox").value)
}
let myStyle = {
    backgroundColor:props.mode ==="dark"?"darkgray":"white",
    color:props.mode === "light"?"black":"white"
}
  return (
 <div className='textFormClass'>
        <div className='my-3'>
            <h3><label htmlFor="myBox" className="form-label">{props.heading}</label></h3>
            <textarea value={texttt} placeholder="Enter some text here" style={myStyle} onChange={chnageText} type="textarea" className="form-control" id="myBox" rows="8"/>
        </div>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2"  onClick={clickTextupper}>Change the text to Uppercase</button>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2" onClick={clickTextlower}>Change the text to lowercase</button>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2" onClick={previewText}>Preview Text</button>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2" onClick={clearText}>Clear Text</button>
        <button disabled ={texttt.length === 0} className="btn btn-primary my-1 mx-2" onClick={copyText}>Copy To Clipboard</button>

        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>{texttt.length} Charecters and {texttt.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words</p>
            <h3>Preview</h3>
            <p>{texttt1}</p>
        </div>
 </div>

  )
}
