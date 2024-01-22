
const ratingService = require('../services/rating.service.js');

const createRating= (req, res) => {
  try {
    const user = req.user
    // const reqBody = req.body;
    
    const rating = ratingService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllRating=async (req, res) => {
    const productId = req.params.productId;
    const user = req.user
  try {
    
    const ratings =await ratingService.getProductsRating(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {getAllRating,createRating}
