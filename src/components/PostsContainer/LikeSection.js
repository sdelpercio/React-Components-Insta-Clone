import React from 'react';

const LikeSection = props => {
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={props.addLike}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{props.thisMany} likes</p>
</div>
  )
};

export default LikeSection;
