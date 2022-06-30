import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='text-center flex justify-center'>
            <h1>This is Calender Part</h1>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate} />
            <p>Selected date:{format(date, "PP")}</p>
        </div>
    );
};

export default Calender;