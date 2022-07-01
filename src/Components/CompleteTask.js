import React from 'react';

const CompleteTask = ({ complete }) => {
    const { title, date, time, description } = complete;
    return (
        <div className="card w-96 bg-base-100 hover:bg-indigo-200 shadow-xl mt-5">
            <div className="card-body text-lg">
                <div className="form-control">

                </div>
                <h2 className="card-title">Title:{title}</h2>
                <p>Date:{date}</p>
                <p>Time:{time}</p>
                <p>Description:{description}</p>

            </div>
        </div>
    );
};

export default CompleteTask;