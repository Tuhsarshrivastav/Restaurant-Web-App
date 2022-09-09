const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

router.get("/getreview", async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).send(reviews);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
router.post("/addreview", async (req, res) => {
  const review = req.body;
  try {
    const newReview = new Review({
      name: review.name,
      email: review.email,
      review: review.review,
    });
    await newReview.save();
    res.status(201).send("New review Added");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
