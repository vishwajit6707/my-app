import React ,{useState} from 'react'

export default function Form(props) {
  let [text , setText] = useState("");
const UpperClick = ()=>{
const a = text.toUpperCase();
setText(a);
// props.showAlert("converted to UpperCase", 'success')
}

const LowerClick = () =>{
  const a = text.toLowerCase();
  setText(a);
//   props.showAlert("converted to lowercase", 'success')
 
}
const handleOnChange = (event)=>{
  setText(event.target.value)
}
const clear = () =>{
  setText("");
//   props.showAlert("Text cleared" , "success")
}


return (
    <>
     <div className='container'>
     <h2>{props.heading}</h2>
    <div className="mb-3">
  </div>
<div className="mb-3">

  <textarea className="form-control" style = {{backgroundColor : props.bg , color : props.cl}} onChange = {handleOnChange} value= {text}  id="myBox" rows="8"></textarea>
  </div>

<button className="btn btn-outline-danger mx-2" onClick={UpperClick}>Convert to Uppercase</button>
<button className="btn btn-outline-danger mx-2" onClick={LowerClick}>Convert to LowerCase</button>
<button className="btn btn-outline-danger mx-2" onClick={clear}>Clear</button>
<button className="btn btn-outline-danger mx-2" onClick={props.blueMode}>{props.isBlue}</button>

</div>
<div className="container my-2 mx-2"style = {{backgroundColor : props.bg , color : props.cl}}>
<h2>Our Text Summary....</h2>
<p>Words in the text are {text.split(" ").length} and the characters are {text.length}</p>
<p>the above para can be read within {0.008 * (text.split(" ").length )} minutes</p>
<h1>Preview</h1>
<p><b>{text.length >0 ? text : "Enter text to preview"}</b></p>
</div>
</>
  )
}

