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
    
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          float:'left',
          marginLeft:'55px',
          marginTop:'30px',
          height:'460px',
        

          
        },
        media: {
          height: '10',
          
        },
      });
      const classes = useStyles();
      
    // console.log(props);
    const{id,title,body} = props.post;
    return (
   <div>
    
     
     <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`https://picsum.photos/200/300?random=${id}`}
          title="Contemplative Reptile"
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
          {/* <Button  size="small" color="primary">
              See More
          </Button> */}
          <Button variant="contained" color="secondary">
  Read Details on Click
</Button>
      </Link>
      </CardActions>
      
</Card>
    
     
   </div>    
        
   
);
};

export default Post;