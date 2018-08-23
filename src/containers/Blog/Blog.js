import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/" 
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#FA923F',
                    textDecoration: 'underline'
                  }}>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                  exact>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />}/> */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;