import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const data = useLoaderData().data
    return (
        <div>
            {data.map(t=> <div>Topic Name:<h1>{data.name}</h1><p>Total Questions:{data.total}</p></div>)}
        </div>
    );
};

export default Topic;