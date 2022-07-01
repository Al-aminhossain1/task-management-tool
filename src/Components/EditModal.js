import { format } from 'date-fns';
import React from 'react';

const EditModal = ({ date, setTask, todo }) => {
    const { title, time, _id, description } = todo;

    const editTask = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const date = event.target.date.value;
        // const time = event.target.time.value;
        const description = event.target.description.value;
        const job = { title, date, description };
        console.log(job);
        fetch(`https://serene-brook-43229.herokuapp.com/task/${_id}`, {
            method: "PUT",
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

        <div className='flex justify-center'>
            <div className='lg:px-20 '>
                <input type="checkbox" id="edit-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={editTask} >
                            <input type="text" name='title' defaultValue={title} className="input input-bordered w-full max-w-xs font-medium text-xl my-2" required />
                            <input type="text" name='date' defaultValue={date} className="input input-bordered w-full max-w-xs my-2" />
                            <input type="text" name='time' defaultValue={time} className="input input-bordered w-full max-w-xs my-2" />
                            <textarea name='description' className="textarea textarea-bordered w-full max-w-xs text-lg" defaultValue={description}></textarea>
                            <input type="submit" className='btn btn-primary mt-3 w-full max-w-xs' value="save" /> <br />

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;