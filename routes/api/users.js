var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcrypt');


module.exports = function(db){
    var userColl= db.collection('users');
    var userModel = {}



    userModel.obtenerPorCorreo = function(email, handler){
        var query = {"email": email};
        userColl.findOne(query, (err, user) =>{
            if(err){
                console.log(err);
                return handler(err, null);

            }

            if(!user){
                return handler(new Error("No se encontro el usuario"), null);

            }
            return handler(null, user);
        });
    }

    userModel.AgregarNuevo = (email, password, handler) =>{
        var newUser = Object.assign({},{
            email:email,
            password: genPassword(password),
            dateCreated: new Date().getTime(),
            active: true,
            lastPasswords:[],
            roles:["public"]
        });
        user.coll.insertOne(newUser,(err, result)=>{
            if(err){
                console.log(err);
                return handler(err,null);
            }
            if(result.insertedCount == 0){

                return handler(new Error("No se guardo el usuario"),null);
            }
            return handler(null, result.ops[0]);
        })
    }

    userModel.changePassword = (email, newPassword, handler)=>{
        var query = {email: email},
        var projection = {"password":1, "active":1, "lastPasswords":1};
        userColl.findOne(query, {"projection": projection}, (err,user) =>{
            if(err){
                console.log(err);
                return handler(err, null);
            }
            if(!user){
                return handler(new Error("No se encontro usuario"), null);
            }
            if(!user.active){
                return handler(new Error("Usuario Inactivo"), null);
            }
            var newPasswordHash = genPassword(newPassword);
            if(bcrypt.compareSync(newPassword, user.password)){
                return handler(new Error("Debe usar otra constrasena que no sea la misma utilizada anteriormente"),null);

            }
            var oldPasswords = user.lastPasswords.filter(
                (pass, i) => {
                    return bcrypt,compareSync(newPassword, psw);
                }
            );
            if(oldPasswords.length > 0){
                return handler(new Error("Debe usar otra constrasena que no sea la misma utilizada anteriormente"), null);
            }
            var  lastPasswords = user.lastPasswords.slice(1,4);
            lastPasswords.push(user.password);
            var update = {
                "$set": {"password": newPasswordHash, "lastPasswords": lastPasswords, "lastChangedPassword": new Date.Time()}  
            }
            userColl.updateOne({"_id": user._id}, update, (err, result)=>{
                if(err){
                    console.log(err);
                    return handler(err, null);
                }
                return handler(null, true);
            });
        });
    }

    function genPassword(rawPassword){
        var hashedPassword = bcrypt.hashSync(rawPassword, 10);

        return hashedPassword;


    }


    return userModel;
}