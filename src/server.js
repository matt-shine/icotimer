const express = require('express')
const app = express()
const axios = require('axios')

const port = process.env.PORT || 8888;

const router = express.Router();

const API_URL = 'https://api.icowatchlist.com/public/v1/';

const store = {};

router.get('/icos/:filter', (req, res) => {
  
  const { filter } = req.params;
  
  console.log(`Got request for: ${filter}`)

  let now = new Date();

  if (store.lastRequest) {
    let tenMinutes = 10 * 60000;
    let tenMinuteSAgo = new Date(now - tenMinutes);
    if (tenMinuteSAgo > store.lastRequest) {
      //Store is stale - refetch
      fetchAll().then(() => {
        res.send(store[filter])
      })
    } else {
      //No need to refetch
      res.send(store[filter]);
    }
  } else {
    //Initial population of store
    fetchAll().then(() => {
      res.send(store[filter])
    })
  }

});

function fetchAll() {
  return new Promise((resolve,reject) => {
    axios.get(`${API_URL}`).then((response) => {
        const { live, upcoming, finished } = response.data.ico;
        store.live = live; 
        store.upcoming = upcoming;
        store.finished = finished;
        store.lastRequest = new Date()
        resolve();
      });
  })
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api', router);

app.listen(port);
console.log(`Listening on port ${port}`)