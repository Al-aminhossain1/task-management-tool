import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TaskModal from './TaskModal';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const [task, setTask] = useState(null);
    console.log(date);
    return (
        <div>
            <div className='text-center flex justify-center'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate} />
            </div>
            <div className='text-center mt-14'>
                <p>Selected date:{format(date, "PP")}</p>
                {/* <button className="btn btn-sm">Create Task</button> */}
                <label htmlFor="task-modal" onClick={setTask} className="btn btn-sm">Create Task</label>
                {task && <TaskModal
                    setTask={setTask}
                    date={date}></TaskModal>}
            </div>

        </div>
    );
};

export default Calender;