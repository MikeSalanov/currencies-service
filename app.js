require("dotenv").config();
const express = require("express");

const serverConfig = require("./serverConfig/serverConfig");
const app = express();
const PORT = process.env.PORT || 4001;


serverConfig(app);

const allCururrenciesRouter = require("./routers/api.currencies.router");
const cururrenciesPairsRouter = require("./routers/api.currencies-pairs.router");

app.use("/currencies-service", allCururrenciesRouter, cururrenciesPairsRouter);

app.listen(PORT, () => console.log(`Server is started on PORT: ${PORT}`));
