import React from 'react';
import   '../CSS/Button.css';


const notOperator = val => {

 return !isNaN(val) || val === "." || val === "=";
 /* function that determines if the input is a operator or an operand */


}


/* deciding what is the button type according to the button props children values*/
/* adding a click property to buttons*/
const Button = props => (

    <div className={`button-container ${notOperator(props.children) ? null : "operation"}`}
         onClick={() => props.Click(props.children)}>

     {props.children}

    </div>


)

export default Button;
