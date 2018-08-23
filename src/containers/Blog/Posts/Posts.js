import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  selectPost = (selectedPostId) => {
    // const selectedPost = this.state.posts.filter(post => post.id === postId)[0];
    // this.setState({
    //   selectedPostId
    // });
    // this.props.history.push({ pathname: '/' + selectedPostId });
    this.props.history.push('/' + selectedPostId);
  }

  componentDidMount() {

    console.log(this.props);

    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Sid'
          }
        });
        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              selectPost={() => this.selectPost(post.id)} />
          // </Link>
        );
      });
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }

}

export default Posts;
