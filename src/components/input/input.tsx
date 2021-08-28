import * as React from 'react';
import eyeClosed from "../../assets/icons/eye-slash-solid.svg";

import './input.scss';
import eyeOpened from "../../assets/icons/eye-regular.svg";
import {useState} from "react";
function Input(props:any) {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [type, setType]=useState(props.type ? props.type : "text" )
    const changeVisiblity=()=>{
        setVisiblePassword(!visiblePassword);
        visiblePassword ? setType("text"): setType("password")
    }
    return (
        <React.Fragment>
        <input  type={type}  className="input-box" placeholder={props.title} />
            {
                props.type==="password" && (
                    <div className="row flex-row-reverse icon-row">
                        {
                            visiblePassword ? (
                                <img src={eyeOpened} onClick={changeVisiblity}  className="eye-icon" />
                            )
                            :
                            (
                                <img src={eyeClosed} onClick={changeVisiblity}  className="eye-icon" />
                            )
                        }

                    </div>
                )
            }

        </React.Fragment>
        );
}

export default Input;
