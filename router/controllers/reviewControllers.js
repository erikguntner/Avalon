const Review = require('../models/review');

const reviewController = {
  getReviews: (req, res) => {
    Review.find({}, (err, reviews) => {
      if (err) return console.error(err);
    }).then(result => res.json(result));
  },

  addReview: (req, res) => {
    Review.create({
      id: req.body.id,
      createdBy: req.body.createdBy,
      createdAt: Date.now(),
      message: req.body.message
    })
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
}

module.exports = reviewController;