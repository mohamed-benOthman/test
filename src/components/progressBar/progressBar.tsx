import * as React from 'react';
import './pprogressBar.scss';

const ProgressBar = () => {
    return (
        <React.Fragment>
        <div className="progress-container">
            <div className="progress-value" />
        </div>
            <label>
                Password strenght
            </label>
        </React.Fragment>
    );
};

export default ProgressBar;
