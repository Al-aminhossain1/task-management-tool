import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div className='lg:px-12 mt-10'>
            {/* <h1 className='text-center text-xl font-medium'>To do Listed</h1> */}
            <p className='text-center text-3xl font-bold'>Total To Do List:{todos.length}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    todos.map(todo => <SingleTodo
                        key={todo._id}
                        todo={todo}
                    ></SingleTodo>)
                }
            </div>
        </div>
    );
};

export default Todo;