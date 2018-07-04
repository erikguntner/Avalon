const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const reviewController = require('./router/controllers/reviewControllers');
const bodyParser = require('body-parser');

mongoose.connect(
   'mongodb://erik:Efg-48,zrE@ds127841.mlab.com:27841/clothing_store',
   () => console.log('Connected')
);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/reviews', reviewController.getReviews);

app.post('/reviews', reviewController.addReview);

app.listen(port, () => console.log(`Listening on port ${port}....`));