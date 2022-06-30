import React from 'react';
import { format } from 'date-fns';

const TaskModal = ({ date, setTask }) => {
    const addNewTask = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const date = event.target.date.value;
        const time = event.target.time.value;
        const description = event.target.description.value;
        const job = { title, date, time, description };
        console.log(job)
        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        setTask(null);
    }
    return (
        <div className='lg:px-20'>
            <input type="checkbox" id="task-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="task-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={addNewTask} >
                        <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs font-medium text-xl my-2" required />
                        <input type="text" name='date' disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='time' placeholder="Time" className="input input-bordered w-full max-w-xs my-2" />
                        <textarea name='description' className="textarea textarea-bordered w-full max-w-xs text-lg" placeholder="description"></textarea>
                        <input type="submit" className='btn btn-primary w-full max-w-xs' value="save" /> <br />
                        {/* <label htmlFor="task-modal" className="btn btn-success btn-sm">save</label> */}
                    </form>

                    {/* <div className="modal-action">
                        <label htmlFor="task-modal" onClick={addNewTask} className="btn btn-success btn-sm">save</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TaskModal;