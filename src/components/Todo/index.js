import React, {useContext} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import './todo.css'
import {todoContext} from '../../TodoContext'

const Todo = ({todo, id}) => {

    const {setTodoList, todoList} = useContext(todoContext);

    function checkTodo(){
        setTodoList(todoList.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    function deleteTodo(){
        setTodoList(todoList.filter(item => item.id !== todo.id))
    }

    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`}  >
            <p > {todo.text} </p>

            <div className='btns' >
                <AiOutlineCheck size={20} onClick={checkTodo} className='check' />
                <BsTrash onClick={id => deleteTodo(id)} size={20} />
            </div>
        </div>
    )
}

export default Todo;
