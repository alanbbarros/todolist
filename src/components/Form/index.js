import React, {useContext} from 'react'
import {todoContext} from '../../TodoContext'
import './form.css'

const Form = () => {

    const {todo, setTodo, todoList, setTodoList} = useContext(todoContext);

    function addTodo(e){
        e.preventDefault();
        setTodoList([...todoList, {text: todo, completed: false, id: Math.random() * 100}])
        setTodo('')
    }

    return (
        <div className='form-container' >
            <form>
                <input value={todo} type='text' onChange={e => setTodo(e.target.value)} placeholder='Task...' ></input>
                <button onClick={e => addTodo(e)} >Add</button>
            </form>
        </div>
    )
}

export default Form
