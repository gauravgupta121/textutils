import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted to uppercase', 'success');
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted to lowercase', 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClearClick = (event) => {
    setText('');
    props.showAlert('Text has been cleared', 'warning');
  }

  const capitalizeOnClick = (event) => {
    let text_array = text.split(' ');

    for(var i = 0; i < text_array.length; i++) {
      text_array[i] = text_array[i][0].toUpperCase() + text_array[i].substr(1);
    }
    setText(text_array.join(' '));
    props.showAlert('Text has been capitalized', 'success');


  }
  const [text, setText] = useState('Enter Text here');
  // setText('Enter Text Here 2');
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#193959'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows='8' style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#193959'}}/>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={capitalizeOnClick}>Capitalize Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      </div>
      <div className="container" my-3 style={{color: props.mode === 'dark' ? 'white' : '#193959'}}>
        <h1>Your Text Summary Here</h1>
        <p>{text.split(' ').length} words and {text.length} charachters.</p>
        <p>{Math.round(0.008 * text.split(' ').length, 2)} minutes will take to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter the text in above text box for Preview'}</p>
      </div>
    </>
  )
}
