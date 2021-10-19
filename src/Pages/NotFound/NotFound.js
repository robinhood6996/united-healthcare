import React from 'react';
import errorImg from '../../images/404.png';


const NotFound = () => {
    return (
        <div>
            <div className="404-img">
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;