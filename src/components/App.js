import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from "./CommentForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

  render() {
    return (
      <div className='container mt-5'>
        <h2>Add comment</h2>
        <CommentForm addComment={this.addComment}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
