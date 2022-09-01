const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

const PackageRouter = require("./routes/packages.js")
const paymentRouter = require('./routes/payment-route');
const paymentHistoryRouter = require('./routes/payment-history-route')

app.use(cors());
app.use(bodyParser.json());

//routes to make api calls
app.use("/package", PackageRouter);
app.use("/payment", paymentRouter);
app.use("/payments/history", paymentHistoryRouter);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {useNewUrlParser : true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});