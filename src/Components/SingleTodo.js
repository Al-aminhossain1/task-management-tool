import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';
const SingleTodo = ({ todo }) => {
    const [task, setTask] = useState(null);
    const [checked, setChecked] = useState(false);
    const { title, date, _id, time, description } = todo;
    const addToCompleteList = () => {
        fetch('https://serene-brook-43229.herokuapp.com/complete', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        fetch(`https://serene-brook-43229.herokuapp.com/task/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => { console.log(data) })

    }


    return (
        <div className="card w-96 bg-base-100 hover:bg-indigo-200 shadow-xl mt-5">
            <div className="card-body text-lg">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        {checked ? <input type="checkbox" className="checkbox" /> : <input type="checkbox" onClick={addToCompleteList} className="checkbox" />}
                    </label>
                </div>
                <h2 className="card-title">Title:{title}</h2>
                <p>Date:{date}</p>
                <p>Time:{time}</p>
                <p>Description:{description}</p>
                <label htmlFor="edit-modal" onClick={setTask} className="btn btn-sm">Edit Task</label>
                <div className='text-center'>
                    {task && <EditModal
                        setTask={setTask}
                        date={date}
                        todo={todo}></EditModal>}
                </div>

            </div>
        </div>
    );
};

export default SingleTodo;