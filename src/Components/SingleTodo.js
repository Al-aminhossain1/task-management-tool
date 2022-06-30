import React, { useState } from 'react';
import EditModal from './EditModal';
const SingleTodo = ({ todo }) => {
    const [task, setTask] = useState(null);
    const { title, date, time, description } = todo;
    return (
        <div className="card w-96 bg-base-100 hover:bg-indigo-200 shadow-xl mt-5">
            <div className="card-body text-lg">
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