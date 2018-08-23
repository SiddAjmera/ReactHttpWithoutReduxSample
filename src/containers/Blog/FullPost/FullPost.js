import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

  state = {
    post: null
  };

  postId = this.props.match.params.id;

  /* shouldComponentUpdate() {
    return this.state.post === null || this.state.post.id !== this.props.postId;
  } */

  componentDidMount() {

    if(this.postId) {
      if(this.state.post && this.postId === this.state.post.id) return;
      axios.get(`/posts/${this.postId}`)
        .then(response => {
          const { data } = response;
          this.setState({
            post: data
          });
        });
    }
  }

  deleteData = () => {
    axios.delete(`/posts/${this.postId}`)
      .then(response => console.log(response));
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if(this.postId) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button onClick={this.deleteData} className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
