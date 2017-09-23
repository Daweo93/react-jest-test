import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.commentText);
    this.setState({ commentText: ''});
  };

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.onSubmit}>
          <textarea value={this.state.commentText}
                 onChange={(event) => this.setState({ commentText: event.target.value })}
                 className="form-control"/>
              <button type="submit" className="btn btn-primary w-100 mt-2" onClick={this.onSubmit}>Add Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;