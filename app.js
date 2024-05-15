// require("dotenv").config();
const express = require("express");

const serverConfig = require("./serverConfig/serverConfig");
const app = express();
const PORT = process.env.PORT || 4001;

// const errorMiddleware = require("./middlewares/error-middleware");


serverConfig(app);

app.use('/currencies-service',

);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server is started on PORT: ${PORT}`));
