import React from 'react';
import "./ImageLinkForm.css";


const ImageLinkForm = ({onSubmit, onInputChange}) => {
  return(
    <div>
      <p className = "f3">
        FaceAI will detect faces in your picture. Try it now!
      </p>
      <div className="alignCenter">
          <div className="form">
            <input type="text" className=" w-70 pa2 center" placeholder="Enter Image URL" onChange={onInputChange}/>
            <button className="w-30 grow f4 ph3 pv2 dib white bg-light-purple pointer" onClick={onSubmit}>Detect</button>
          </div>
      </div>
      
    </div>
  )
}

export default ImageLinkForm;