const { Router } = require("express");
const router = Router();

const Word = require("../models/word.model");

router.get("/sort", async (req, res) => {
  try {
    const total = await Word.find({}).countDocuments().lean().exec();
    let words = await Word.find({})
      .sort("count")
      .skip(total - 10)
      .limit(10)
      .lean()
      .exec();
    return res.status(200).send(words.reverse());
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const words = await Word.create(req.body);
    return res.status(200).send(words);
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

module.exports = router;
