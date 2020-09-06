import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';
import CommentDetails from './components/CommentDetails/CommentDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Posts></Posts>
        </Route>

        <Route path="/post">
          <Posts></Posts>
        </Route>

        <Route path={`/posts/:postId`}>
            <PostDetails></PostDetails> 
        </Route>

        
        

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
