import * as React from 'react';
import './subtitle-footer.scss';

function SubtitleFooter(props:any) {
    return (
        <div className="footer-container">{props.title}</div>
    );
}

export default SubtitleFooter;
