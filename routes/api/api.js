var express = require('express');
var router = express.Router();

function routerInit(db){

    const securityApi = require('./security')(db);
    const thingsApi = require('./things')(db);
  
    router.use('/security', securityApi);
    router.use('/things', thingsApi);

    return router;
}

module.exports = routerInit;