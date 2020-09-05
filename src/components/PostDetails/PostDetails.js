import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const PostDetails = () => {
    const[postDetail, setPostDetail] = useState({});
    const{ id } = useParams();
    
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res=>res.json())
       .then(data=>{
           setPostDetail(data);
       })
    },[])
    
    return (
        <div style={{margin:'auto',padding:'10px', width:'500px',height:'400px',border:'1px solid red', borderRadius:'10px'}}>
            <p style={{textAlign:'center'}}>id No:{id}; <span>User Id:{postDetail.userId}</span></p>
            
            <h3 style={{textAlign:'center',color:'purple'}}>{postDetail.title}</h3>
            <hr style={{width:'80%',textAlign:'center',height:'30px',color:'red'}}></hr>
            <h4 style={{lineHeight:'40px'}}>{postDetail.body}</h4>
        </div>
    );
};

export default PostDetails;