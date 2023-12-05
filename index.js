const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3500;

app.get('/', (req, res, next) => {});

app.listen(PORT, () => {
	console.log('Server is running at Port', PORT);
});
