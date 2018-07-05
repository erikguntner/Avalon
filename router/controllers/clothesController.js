const Clothes = require('../models/clothes');

const clothesController = {
  getClothes: (req, res) => {
    Clothes.find({}, (err, clothes) => {
      if (err) return console.error(err);
    }).then(result => res.json(result));
  },

  addClothes: (req, res) => {
    Clothes.create({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      type: req.body.type,
      img: req.body.img,
      description: req.body.description
    })
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  deleteClothes: (req, res) => {
    Clothes.deleteMany({}, (err, response) => {
      if (err) return console.log(err);
    }).then(result => res.json(result));
  },

  findGarment: (req, res) => {
    console.log(req.query.id);
    Clothes.find({ _id: req.query.id }, (err, clothes) => {
      if (err) return console.error(err);
    }).then(result => res.json(result));
  }
}

module.exports = clothesController;