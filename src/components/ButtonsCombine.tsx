import React, {FC} from 'react';
interface ButtonsCombine{
    title?: string;
}

const ButtonsCombine: FC<ButtonsCombine> = ({ title, children}) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            {children}
            <span>{title}</span>
        </div>
    );
};

export default ButtonsCombine;