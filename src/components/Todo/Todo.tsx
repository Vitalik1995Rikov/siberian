import React, { FC, useState } from "react";

const DEFAULT_TODO = {
    name: '',
    description: ''
}

const Todo: FC = () => {
    const [todos, setTodos] = useState(DEFAULT_TODO)
    return (
        <div>
            <div>
                <label htmlFor="">
                    <div>Name</div>
                    <input type="text" name="" id="" />
                </label>
            </div>
            <div>
            <label htmlFor="">
                    <div>Description</div>
                    <input type="text" name="" id="" />
                </label>
            </div>
        </div>
    )
}

export default Todo;