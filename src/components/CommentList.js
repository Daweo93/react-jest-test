import React from 'react';

export default function CommentList(props) {
  const comments = props.comments;

  return (
    <div className="comment-list">
      <ul className="mt-5 list-group">
        {comments.map(comment => {
          return (
            <li key={comment} className="list-group-item">{comment}</li>
          )
        })}
      </ul>
    </div>
  )
}