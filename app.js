const express = require('express');
const cors = require('cors');
const router = require('./src/routes/index');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express();

var corsOptions = {
	origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' })); // allow most 50mb for json data
app.use(express.urlencoded({ extended: false })); // this line allow to take data from form data ma yone yin shrr kyie :3

app.use('/api', router);
app.use('/', (req, res) => {
	res.send('Hello from the server');
});

app.use(errorMiddleware);

module.exports = app;
