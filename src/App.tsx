import React, { FC, useState } from "react";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

const DEFAULT_TODO_LIST = [
    {id: 1, name: 'task 1', description: 'description 1', checked: false},
    {id: 2, name: 'task 2', description: 'description 2', checked: false},
    {id: 3, name: 'task 3', description: 'description 3', checked: false},
  ]

const App:FC = () => {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
    return(
        <div>
            <Header todoCount={todos.length}/>
            <Todo/>
        </div>
    )
}

export default App;