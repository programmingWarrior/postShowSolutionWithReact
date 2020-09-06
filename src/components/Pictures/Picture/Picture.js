import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Picture = (props) => {
    const {postId} = useParams();
    const {id,img} = props.img;
    
    
    return (
        <div>
           

        </div>
    );
};

export default Picture;