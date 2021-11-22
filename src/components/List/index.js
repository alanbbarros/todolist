import React, {useContext, useState, useEffect} from 'react'
import { todoContext } from '../../TodoContext';
import './list.css'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import Todo from '../Todo'

const List = () => {

    const {todoList, setTodoList, filter, setFilter, filteredTodos, filterHandler} = useContext(todoContext);

    function changeFilter(e){
        setFilter(e.target.innerHTML)
    }

    useEffect(() =>{
        filterHandler();
    }, [filter, todoList])

    return (
        <div className='todo-container' >
            
            <div className='btn-wrapper' >
                <button onClick={changeFilter} className='btn'>Todos</button>
                <button onClick={changeFilter} className='btn'>Completos</button>
                <button onClick={changeFilter} className='btn' >Pendentes</button>
            </div>

            {filteredTodos.map((todo, item) =>{
                return(
                    <Todo
                        todo={todo}
                        id={todo.id}
                        key={todo.id}
                    />
                )
            })}

            <p className='contador' >{filteredTodos.length} </p>
        </div>
    )
}

export default List
