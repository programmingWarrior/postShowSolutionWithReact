import React, { useState } from 'react';
import { useEffect } from 'react';
import Comment from '../Comment/Comment'
import { useParams } from 'react-router-dom';


const Comments = () => {
    const [comments,setComments] = useState([]);
    const {postId}= useParams();
   
   
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setComments(data);
           
        })
    },[])
    return (
        <div>
           
            {
                comments.map(comment=><Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default Comments;