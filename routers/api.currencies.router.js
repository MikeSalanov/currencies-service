const router = require("express").Router();

const { Currency } = require("../db/models");

router.get("/currencies", async (req, res) => {
  try {
    const allCururrencies = await Currency.findAll({ raw: true });
    console.log(allCururrencies);
    res.status(200).json(allCururrencies);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
