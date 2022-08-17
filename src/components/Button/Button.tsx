import React, { FC } from "react";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'red' | 'blue' | 'orange'
}

const Button:FC<ButtonProps> = ({children, color, onClick}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;