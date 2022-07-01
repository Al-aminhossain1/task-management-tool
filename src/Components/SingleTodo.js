import React, { useState } from 'react';
import EditModal from './EditModal';
const SingleTodo = ({ todo }) => {
    const [task, setTask] = useState(null);
    const [checked, setchecked] = useState(false);
    const { title, date, time, description } = todo;
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
    }

    return (
        <div className="card w-96 bg-base-100 hover:bg-indigo-200 shadow-xl mt-5">
            <div className="card-body text-lg">
                <div class="form-control">
                    <label class="label cursor-pointer">
                        {checked ? <input type="checkbox" class="checkbox" /> : <input type="checkbox" onClick={addToCompleteList} class="checkbox" />}
                    </label>
                </div>
                <h2 className="card-title">Title:{title}</h2>
                <p>Date:{date}</p>
                <p>Time:{time}</p>
                <p>Description:{description}</p>
                <label htmlFor="edit-modal" onClick={setTask} className="btn btn-sm">Edit Task</label>
                {task && <EditModal
                    setTask={setTask}
                    date={date}
                    todo={todo}></EditModal>}
                {/* <div className="card-actions justify-center">
                    <button className="btn btn-primary hover:w-full">edit</button>

                </div> */}
            </div>
        </div>
    );
};

export default SingleTodo;