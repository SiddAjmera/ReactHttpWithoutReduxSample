import React, { Component } from 'react';
import axios from 'axios';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
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
      });
  }

  selectPost(selectedPostId) {
    // const selectedPost = this.state.posts.filter(post => post.id === postId)[0];
    this.setState({
      selectedPostId
    });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post 
        key={post.id} 
        title={post.title} 
        author={post.author} 
        selectPost={() => this.selectPost(post.id)}/>
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost postId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;