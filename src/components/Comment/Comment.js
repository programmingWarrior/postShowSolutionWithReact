import React from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
import Pictures from '../Pictures/Pictures';
import Picture from '../Pictures/Picture/Picture';
import d from '../d.jpg';


const Comment = (props) => {
    const{name,body,email,id} = props.comment;
    

    return (
       <div style={{backgroundColor:'tomato', borderRadius:'10px',width:'70%',justifyContent:'right',marginLeft:'200px',height:'150px',}}>
           <div>
               
           </div>
                <div style={{marginTop:'30px'}}>
                    <img style={{borderRadius:'50%',float:'left',width:'100px',height:'125px',marginTop:'10px',marginRight:'10px'}} src={`https://picsum.photos/200/300?random=${id}`} alt=""/>
                   
                   
                </div>

                <div>
                    <h6>Name:{name}</h6>
                    <p>Email:{email}
                    </p>
                    

                    <p>{body}</p>
                </div>
                
            </div>

       
    );
};

export default Comment;