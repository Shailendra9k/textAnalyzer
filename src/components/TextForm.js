import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoclick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[]+/);
    setText(newText.join(""));
  }

  const [text, setText] = useState(' ');
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
       <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">  </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} chracters</p>
      <p>{0.008 * text.split(" ").length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
