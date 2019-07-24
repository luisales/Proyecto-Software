const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function thingsInit(db){

    var  thingsColl = db.collection('things');



return router;
}
module.exports = thingsInit;