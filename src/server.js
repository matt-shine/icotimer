const express = require('express')
const app = express()
const axios = require('axios')

const port = process.env.PORT || 8888;

const router = express.Router();

const API_URL = 'https://api.icowatchlist.com/public/v1/';

router.get('/icos/:filter', (req, res) => {

	axios.get(`${API_URL}/${req.params.filter}`).then((response) => {
    console.log(response.data.ico[req.params.filter])
		res.send(response.data.ico[req.params.filter]);
	});
	
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}`)