import React from 'react';
import '../assets/css/LoadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className='spinner-overlay'>
            {/* <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}
            <div className="ring">Loading
                <span></span>
            </div>
        </div>
    );
};

export default LoadingScreen;