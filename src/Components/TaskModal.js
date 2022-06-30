import React from 'react';
import { format } from 'date-fns';

const TaskModal = ({ date, setTask }) => {
    const addNewTask = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const date = event.target.date.value;
        const time = event.target.time.value;
        const description = event.target.description.value;
        console.log(title, date, time, description)
        setTask(null);
    }
    return (
        <div className='lg:px-20'>
            <input type="checkbox" id="task-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="task-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={addNewTask} >
                        <input type="text" name='title' placeholder="Title" class="input input-bordered w-full max-w-xs font-medium text-xl my-2" required />
                        <input type="text" name='date' disabled value={format(date, "PP")} class="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='time' placeholder="Time" class="input input-bordered w-full max-w-xs my-2" />
                        <textarea name='description' class="textarea textarea-bordered w-full max-w-xs text-lg" placeholder="description"></textarea>
                        <input type="submit" className='btn btn-primary w-full max-w-xs' value="save" /> <br />
                        {/* <label for="task-modal" class="btn btn-success btn-sm">save</label> */}
                    </form>

                    {/* <div class="modal-action">
                        <label for="task-modal" onClick={addNewTask} class="btn btn-success btn-sm">save</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TaskModal;