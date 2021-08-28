import * as React from 'react';
import './button.scss';
const Button = (props:any) => {
    return (
        <div className="buttonContainer" >
            {props.title}
        </div>
    );
};

export default Button;
