const express = require('express');
var router = express.Router();

function initSecurity (db){
    var userModel = require('./users')(db);

    router.get('/login',(req, res, next)=>{
      userModel.obtenerPorCorreo(req.body.email, (err, user)=>{
          if(err){
              return res.status(400).json(err);
          }
          return res.status(200).json(user);
       
    } );

        res.status(200).json({"module":"security"});
    });


}


module.exports = initSecurity;