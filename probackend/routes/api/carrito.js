const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function CarritoInit(db) {


    var CarritoColl = db.collection('Carrito');

    var CarritoCollection = [];

    var CarritoStruct = {
        "codigoProducto": '',
        "nombreProducto":'',
        "idPersona": ''
    
    };



    router.get('/', (req, res, next) => {
        var { _id} = req.user;
        var query = {"idPersona": new ObjectID(_id)}
        CarritoColl.aggregate(
            [
                 {$match: query},
                 {$group: {_id: "$codigoProducto", total: { $sum:1}, nombreProducto:{"$first":"$nombreProducto"},codigoProducto:{"$first":"$codigoProducto"}, Precio:{"$first":"$Precio"}} }
            ]
       ).toArray((err, things) => {
         console.log(things);
            if (err) return res.status(200).json([]);
            return res.status(200).json(things);
        });
    });

    router.post('/', (req, res, next) => {
        var {_id} = req.user;
        var newElement = Object.assign({},
            CarritoStruct,
            {
                "codigoProducto":  new ObjectID(req.body.codigoProducto),
                "nombreProducto":req.body.nombreProducto,
                "Precio": req.body.Precio,
                "idPersona": new ObjectID(_id)
                
                    
                
            }

        );
        CarritoColl.insertOne(newElement, {}, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(404).json({ "error": "No se pudo Insertar" });
            }
            return res.status(200).json({ "n": result.insertedCount, "obj": result.ops[0] });
        });
    });

    router.delete('/:id', (req, res, next) => {
        var { _id} = req.user;
        var query = {"codigoProducto":new ObjectID(req.params.id),"idPersona": new ObjectID(_id)}
        CarritoColl.remove(query, (err, result) => {
          if(err) {
            console.log(err);
            return res.status(400).json({"error":"Error al eliminar documento"});
          }
          return res.status(200).json(result);
        });
    
      });

    return router;
}
module.exports = CarritoInit;