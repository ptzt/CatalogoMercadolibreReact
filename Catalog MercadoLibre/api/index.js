const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');

let cache = {};

const server = express();

server.name = 'API';

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', '*'); // Indica que permite el ingreso de todos los metodos
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Solo recibe peticiones de la URL indicada
  res.header('Access-Control-Allow-Credentials', 'true'); // Setea en true las credenciales de las peticiones
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(morgan('dev'));

function cacheRequest(req, res, next) {
  const { query } = req.query;
  
  if (cache.hasOwnProperty(query)) {
    console.log(query,"is in the cache");
    res.status(304).json(cache[query])
  } else {
    next();
  }
}

// RUTAS

server.get('/api/search', cacheRequest, (req, res, next) => {
  const { query } = req.query;

  fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + query)
    .then(results => results.json())
    .then(data => {
      const products = data.results.map((e) => {
        return {
          title: e.title,
          price: e.price,
          money: e.currency_id,
          image: e.thumbnail,
          stock: e.available_quantity,
          link: e.permalink,
          condition: e.condition
        }
      });
      cache[query] = products;
      console.log(query, "was cached");
      res.status(200).json(products);
    })
    .catch(err => res.send(err));
});

// FIN RUTAS

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(8080, () => {
  console.log("---> Listening at port 8080");
});