import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import profile1 from '../../assets/images/profile1.jpg';
import profile2 from '../../assets/images/profile2.jpg';
import profile3 from '../../assets/images/profile3.jpg';
import './ReviewsPage.css';


const reviews = [
  { name: 'Jessica Doe', date: '2023-01-01', review: 'Amazing food and great service!', rating: 5, profileImage: profile1 },
  { name: 'Jane Smith', date: '2023-02-15', review: 'Loved the ambiance and the food was delicious.', rating: 4, profileImage: profile2 },
  { name: 'Sandra Lee', date: '2023-03-10', review: 'A bit pricey but worth it for a special occasion.', rating: 4, profileImage: profile3 },
  { name: 'Sandra Lee', date: '2023-03-10', review: 'A bit pricey but worth it for a special occasion.', rating: 4, profileImage: profile3 },
];

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h2>Customer Reviews</h2>
      <p>Read what our customers have to say about us.</p>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
