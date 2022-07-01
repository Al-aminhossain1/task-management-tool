import React, { useEffect, useState } from 'react';
import CompleteTask from './CompleteTask';

const Complete = () => {
    const [completes, setCompletes] = useState([]);
    useEffect(() => {
        fetch('https://serene-brook-43229.herokuapp.com/complete')
            .then(res => res.json())
            .then(data => setCompletes(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl mt-6 font-medium'>Complete Task</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    completes.map(complete => <CompleteTask
                        key={complete._id}
                        complete={complete}>
                    </CompleteTask>)
                }
            </div>
        </div>
    );
};

export default Complete;