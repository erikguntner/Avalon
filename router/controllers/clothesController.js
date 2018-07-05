const Clothes = require('../models/clothes');

const clothesController = {
  getClothes: (req, res) => {
    console.log('hi');
    Clothes.find({}, (err, clothes) => {
      if (err) return console.error(err);
    }).then(result => res.json(result));
  },

  addClothes: (req, res) => {
    Clothes.create({
      id: req.body.id,
      title: req.body.title,
      type: req.body.type,
      img: req.body.img,
      description: req.body.description
    })
      .then(result => res.json(result))
      .catch(err => console.log(err));
  },

  findGarment: (req, res) => {
    console.log(req.query.id);
    Clothes.find({ _id: req.query.id }, (err, clothes) => {
      if (err) return console.error(err);
    }).then(result => res.json(result));
  }
}

module.exports = clothesController;