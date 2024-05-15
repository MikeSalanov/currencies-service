require("dotenv").config();
const express = require("express");

const serverConfig = require("./serverConfig/serverConfig");
const app = express();
const PORT = process.env.PORT || 4001;

// const errorMiddleware = require("./middlewares/error-middleware");



serverConfig(app);

const allCururrenciesRouter = require('./routers/api.currencies.router')
 
app.use("/currencies-service", allCururrenciesRouter);
// app.use();

app.listen(PORT, () => console.log(`Server is started on PORT: ${PORT}`));
