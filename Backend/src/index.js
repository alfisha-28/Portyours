const express = require('express');
const morgan = require('morgan');
const app = express();

const logger = require("./middlewares/logger");

app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

const mainRoute = require("./routes/mainRoutes");
const userRoute = require("./routes/userRoute");
const portfolio = require("./routes/portfolioRoutes")



app.use("/api", mainRoute);
app.use("/user", userRoute);
app.use("/port", portfolio)

module.exports = app;