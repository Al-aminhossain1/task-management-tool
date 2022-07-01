import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TaskModal from './TaskModal';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const [task, setTask] = useState(null);
    return (
        <div>
            <div className='text-center flex justify-center'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate} />
            </div>
            <div className='text-center my-5'>
                <p className='text-lg font-medium'>Selected date:{format(date, "PP")}</p>
                {/* <button className="btn btn-sm">Create Task</button> */}
                <label htmlFor="task-modal" onClick={setTask} className="btn btn-sm mt-5">Create Task</label>
                {task && <TaskModal
                    setTask={setTask}
                    date={date}></TaskModal>}
            </div>

        </div>
    );
};

export default Calender;