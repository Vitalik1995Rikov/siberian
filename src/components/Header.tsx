import React, { FC } from "react";

interface HeaderProps {
    todoCount: number
}

const Header:FC<HeaderProps> = ({todoCount}) => {
    return (
        <div>
            Header {todoCount}
        </div>
    )
}

export default Header;