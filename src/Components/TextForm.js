import React,{useState} from 'react'

export default function TextForm(props) {
const [texttt, setText] = useState("Enter Text Here");

const clickTextupper=()=>{
    // console.log("Click on button");
    let newText = texttt.toUpperCase();
    setText(newText);
    props.alertMessage("Converted to Upper Case successfully","success");
}
const clickTextlower=()=>{
    // console.log("Click on button");
    let newText = texttt.toLowerCase();
    setText(newText);
    props.alertMessage("Converted to Lower Case successfully","success");
}
const chnageText = (e)=>{
    // console.log(e.target);
    setText(e.target.value);
    
}
const clearText = ()=>{
    // console.log(e.target);
    setText("");
    props.alertMessage("Cleared Text successfully","success");
}
const copyText = ()=>{
    let copiedText = document.getElementById("myBox");
    console.log(copiedText.value);
    navigator.clipboard.writeText(copiedText.value);
    props.alertMessage("Copied Text successfully","success");
}
const removeExtraSpaces=()=>{
    setText(texttt.split(" ").filter(function(item){
        return item;
    }).join(" "))
    props.alertMessage("Remove Extra Spaces successfully","success");
}
const [texttt1, prevText] = useState("");
const previewText = ()=>{
    prevText(document.getElementById("myBox").value)
}
  return (
    <>
    <div id='main'>
        <div className='my-3'>
            <h3><label htmlFor="myBox" className="form-label">{props.heading}</label></h3>
            <textarea value={texttt} onChange={chnageText} type="textarea" className="form-control" id="myBox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickTextupper}>Change the text to Uppercase</button>
        <button className="btn btn-primary " onClick={clickTextlower}>Change the text to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={previewText}>Preview Text</button>
        <button className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    

    <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{texttt.length} Charecters and {texttt.split(" ").length} Words</p>
        <h3>Preview</h3>
        <p>{texttt1}</p>
    </div>
    </div>
    </>
  )
}
