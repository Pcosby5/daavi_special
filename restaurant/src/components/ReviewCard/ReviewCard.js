import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ name, date, review, rating, profileImage }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
        <div className="reviewer-info">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="review-content">
        <p>{review}</p>
      </div>
      <div className="review-rating">
        <p>Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default ReviewCard;
