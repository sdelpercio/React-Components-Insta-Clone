// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)

  const changeComment = () => {
    
  }
  const submitComment = () => {
    
  }

  return (
    <div>
      {props.comments.map(item => (
        <Comment comment={item} />
      ))}
      <CommentInput submitComment={} changeComment={} />
    </div>
  );
};

export default CommentSection;
