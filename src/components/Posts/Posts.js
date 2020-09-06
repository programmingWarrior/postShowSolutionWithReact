import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            
            setPosts(data);
        })
    },[]);
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        toolbar: {
          minHeight: 128,
          alignItems: 'flex-start',
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          alignSelf: 'flex-end',
        },
      }));
      const classes = useStyles();      
    return (
        <div>
            {/* <h1 style={{textAlign:'center',background:'skyblue',lineHeight:'100px',fontWeight:'bold',color:'purple'}}>WelCome to My Blog</h1> */}

                    <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        WelCome To Shawon Ahmed's Blog
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                        
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>

         <div>
            {
                    posts.map(post=> <Post post={post} key={post.id}></Post>)
                }
        </div>
        </div>
    );
};

export default Posts;
