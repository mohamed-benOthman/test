import * as React from 'react';
import './checkbox.scss';
import {useState} from "react";

function Checkbox(props:any) {
    const [checked, setChecked]= useState(props.checked)
    const changeChecked= ()=>{
        setChecked(!checked);
    }
    return (

        <div >
            <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="true" checked={props.checked} onClick={changeChecked} />
            {
                props.type===1 ? (
                    <label className="none"  htmlFor="styled-checkbox-2">{props.title}</label>

                ):
                    (
                        <label className={checked ? "enabled-label": "disabled-label"} htmlFor="styled-checkbox-2">{props.title}</label>

                    )
            }


        </div>
    );
}

export default Checkbox;
