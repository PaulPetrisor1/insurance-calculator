import React from 'react';
import '../CSS/Button.css';


const Clear = (props)=>(

  <div className="button-container" onClick={props.clearPrompt}>

  {props.children}

  </div>

);

export default Clear;
