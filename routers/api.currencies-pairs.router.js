const router = require("express").Router();

const { Currency } = require("../db/models");

router.get("/currencies/pairs", async (req, res) => {
  const { from } = req.query;
  console.log("FROM param", from);
  try {
    const allCurrencies = await Currency.findAll({
      raw: true,
    });
    const currenciesWithoutFromCurrency = allCurrencies.filter(
      (cur) => cur.currency_ticker !== from
    );
    console.log(currenciesWithoutFromCurrency);
    res.json(currenciesWithoutFromCurrency);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
