import React, { ChangeEvent, FC, useState } from "react";
import Button from "../Button/Button";

const DEFAULT_TODO = {
    name: '',
    description: ''
}

type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean
}

interface TodoProps {
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id' >) => void;
}

const TodoPanel: FC<TodoProps> = ({addTodo}) => {
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
            <Button color="blue" onClick={() => addTodo({name: todos.name, description: todos.description})}>
                Add
            </Button>
        </div>
    )
}

export default TodoPanel;