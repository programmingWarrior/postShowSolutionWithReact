import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PostDetails from '../../components/PostDetails/PostDetails'

const Post = (props) => {
    
    const handleClick = ()=> {
        
    };
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          float:'left',
          marginLeft:'55px',
          marginTop:'30px',
          height:'300px',
        

          
        },
        media: {
          height: '10',
          
        },
      });
      const classes = useStyles();
      
    // console.log(props);
    const{id,title,body} = props.post;
    return (
       
        
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
            
                
                title={"Contemplative Reptile"}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
                {id}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {body}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Link style={{textDecoration:'none'}} to={`/posts/${id}`}>
                <Button size="small" color="primary" onClick={handleClick}>
                    See More
                </Button>
            </Link>
            </CardActions>
            
      </Card>
    );
};

export default Post;