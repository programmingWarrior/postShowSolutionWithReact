import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';
import CommentDetails from '../CommentDetails/CommentDetails';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const PostDetails = () => {
    const[postDetail, setPostDetail] = useState({});
    const{ postId } = useParams();
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

      const classes = useStyles();
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then(res=>res.json())
       .then(data=>{
           setPostDetail(data);
       })
    },[]);
    
    return (
        <div>
            <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Posts
            </Typography>
            <Button color="inherit">LOG IN</Button>
            </Toolbar>
        </AppBar>
    </div>
            <div>
                <div style={{margin:'auto',padding:'10px',}}>
                <h3 style={{textAlign:'center'}}>{postId} 
                
                </h3>

                {/* <span>User Id:{postDetail.userId}</span> */}
                
                <h3 style={{textAlign:'center',color:'purple'}}>{postDetail.title}</h3>
                <hr style={{width:'80%',textAlign:'center',height:'30px',color:'red'}}></hr>
                <h4 style={{lineHeight:'40px'}}>{postDetail.body}</h4>
                
            
        </div>
            </div>

            <div>
              <Comments></Comments>
            </div>
        </div>
    );
};

export default PostDetails;