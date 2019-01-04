import React from 'react';

const Button =({btnName,onBtnClick,className})=>(<div>
    <button className={className} name={btnName} onClick={onBtnClick}>
        {btnName}
    </button>
    </div>)

export default Button;