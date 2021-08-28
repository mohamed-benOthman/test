import * as React from 'react';
import './subTitle.scss';

const SubTitle = (props:any) => {
    return (
        <p className="subTitle">{props.title}</p>
    );
};

export default SubTitle;
