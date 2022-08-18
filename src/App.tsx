import React, { FC, useState } from "react";
import Header from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";

type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean
}

const DEFAULT_TODO_LIST = [
    {id: 1, name: 'task 1', description: 'description 1', checked: false},
    {id: 2, name: 'task 2', description: 'description 2', checked: false},
    {id: 3, name: 'task 3', description: 'description 3', checked: false},
  ]

const App:FC = () => {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false }])
    console.log(todos)
    }

    return(
        <div>
            <Header todoCount={todos.length}/>
            <TodoPanel addTodo={addTodo}/>
        </div>
    )
}

export default App;