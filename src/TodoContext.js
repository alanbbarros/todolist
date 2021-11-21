import React, {createContext, useState} from 'react'

export const todoContext = createContext();

const TodoContext = ({children}) => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    return (
        <todoContext.Provider value={{
            todo,
            setTodo,
            todoList,
            setTodoList
        }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext
