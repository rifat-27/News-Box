import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const data = useLoaderData().data
    return (
        <div>
            Topic: 
        </div>
    );
};

export default Topic;