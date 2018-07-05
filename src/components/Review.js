import React from 'react'

const Review = (props) => {
  return (
    <div className="review">
      <div className="review-user">{props.name}</div>
      <div className="review-date">{props.date}</div>
      <p className="review-message">{props.message}</p>
    </div>
  )
}

export default Review;
