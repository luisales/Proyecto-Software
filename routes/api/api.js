var express = require('express');
var router = express.Router();

function routerInit(db){

    const thingsApi = require('./things')(db);
  
    router.use('/things', thingsApi);

    return router;
}

module.exports = routerInit;