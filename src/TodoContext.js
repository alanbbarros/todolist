import React, {createContext, useState} from 'react'

export const todoContext = createContext();

const TodoContext = ({children}) => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([])
    const [filter, setFilter] = useState('Todos');

    function filterHandler(){

        switch (filter){
            case "Completos":
                setFilteredTodos(todoList.filter(item => item.completed === true))
                break;

            case "Pendentes":
                setFilteredTodos(todoList.filter(item => item.completed === false))
                break;

            default:
                setFilteredTodos(todoList)
                break;
        }

    }


 
    return (
        <todoContext.Provider value={{
            todo,
            setTodo,
            todoList,
            setTodoList,
            filter,
            setFilter,
            filteredTodos,
            setFilteredTodos,
            filterHandler
        }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext
