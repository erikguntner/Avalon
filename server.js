const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const reviewController = require('./router/controllers/reviewControllers');
const clothesController = require('./router/controllers/clothesController');
const dbKey = require(config.js).dbKey

const bodyParser = require('body-parser');

mongoose.connect(
  dbKey,
  () => console.log('Connected')
);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/reviews', reviewController.getReviews);
app.post('/reviews', reviewController.addReview);
app.delete('/reviews', reviewController.deleteReviews);


app.get('/clothes', clothesController.getClothes);
app.post('/clothes', clothesController.addClothes);
app.delete('/clothes', clothesController.deleteClothes);
app.get('/clothes/id?:id', clothesController.findGarment);



app.listen(port, () => console.log(`Listening on port ${port}....`));