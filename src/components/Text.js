import React,{useState} from "react";


export default function Text(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase","success")

    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleLoclick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
        props.showAlert("converted to lowercase", "success");

    }
    //--------clear
    const handleclearclick=()=>{
      let newText="";
      setText(newText)
      props.showAlert("all text is clear ","success")

    }
    //-------copy the text---------//
    const handlecopy = () => {
      console.log("i ama copy");
      var text=document.getElementById("myBox");
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("text is copy","success")
    };
    //remove extra spaces
    const handleRemove=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("remove spaces", "success");

    }
    //
    const [text,setText]=useState('')
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",color:props.mode==="dark"?"white":"black"
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoclick}>
            convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleclearclick}>
            click to clear
          </button>
          <button className="btn btn-primary mx-2" onClick={handlecopy}>
            click to copy
          </button>
          <button className="btn btn-primary mx-2" onClick={handleRemove}>
            Remove Extra spaces
          </button>
        <div
          className="container my-2"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Your Text summary is Here</h1>
          <p>
            {text.split(" ").length} words and,{text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"enter above some text"}</p>
        </div>
      </>
    );
}
