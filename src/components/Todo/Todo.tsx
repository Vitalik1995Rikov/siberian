import React, { ChangeEvent, FC, useState } from "react";

const DEFAULT_TODO = {
    name: '',
    description: ''
}

const Todo: FC = () => {
    const [todos, setTodos] = useState(DEFAULT_TODO)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodos({...todos, [name]: value});
        console.log(todos)
    }
    

    return (
        <div>
            <div>
                <label htmlFor="">
                    <div>Name</div>
                    <input type="text" name="name" id="" onChange={onChange} />
                </label>
            </div>
            <div>
            <label htmlFor="">
                    <div>Description</div>
                    <input type="text" name="name" id="" onChange={onChange}/>
                </label>
            </div>
        </div>
    )
}

export default Todo;