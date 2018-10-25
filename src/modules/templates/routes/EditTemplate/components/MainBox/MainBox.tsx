import * as React from 'react'
import './main-box.style.scss';

const MainBox = (props: any) => {
    return <div className="main-box">
        <div className="scroll-container custom-scrollbar">
            {props.children}
        </div>
    </div>
}

export default MainBox;