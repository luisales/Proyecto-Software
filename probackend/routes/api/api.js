const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

function routerInit(db){
    passport.use(
        new JWTStrategy(
          {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey:"polloslocos"
          },
          (payload, next)=>{
            var user = payload;
            return next(null, user);
          }
        )
      );


    const securityApi = require('./security')(db);
    const thingsApi = require('./things')(db);
  
    router.use('/security', securityApi);
    router.use('/things', passport.authenticate('jwt', {session:false}) , thingsApi);

    return router;
}

module.exports = routerInit;