import React, {useContext} from 'react'
import { todoContext } from '../../TodoContext';
import './list.css'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import Todo from '../Todo'

const List = () => {

    const {todoList, setTodoList} = useContext(todoContext);

    return (
        <div className='todo-container' >
            {todoList.map((todo, index) =>{
                return(
                    <Todo
                        key={index}
                        todo={todo}
                        id={todo.id}
                    />
                )
            })}
        </div>
    )
}

export default List
