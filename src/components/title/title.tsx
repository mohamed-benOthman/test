import * as React from 'react';
import './title.scss';

function Title(props:any) {
    return (
       <p className="title">{props.title}</p>
    );
}

export default Title;
