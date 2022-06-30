import React from 'react';

const SingleTodo = ({ todo }) => {
    const { title, date, time, description } = todo;
    return (
        <div class="card w-96 bg-base-100 hover:bg-indigo-200 shadow-xl mt-5">
            <div class="card-body text-lg">
                <h2 class="card-title">Title:{title}</h2>
                <p>Date:{date}</p>
                <p>Time:{time}</p>
                <p>Description:{description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary hover:w-full">edit</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTodo;