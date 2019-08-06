const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function OrdenesInit(db) {


  var  OrdenesColl = db.collection('Carrito');
  var FacturasColl = db.collection('Pedidos');

  var FacturaCollection = [];

  var FacturaStruct = {
      "estadoFactura": '',
      "fechaFactura": 0,
      "idPersona": ''
  
  };

  router.get('/', (req, res, next) => {
      var { _id} = req.user;
      var query = {}
      FacturasColl.aggregate(
          [
               {$match: query}

          ]
     ).toArray((err, things) => {
          if (err) return res.status(200).json([]);
          return res.status(200).json(things);
      });
  }); 

 

  
 router.post('/', (req, res, next) => {
        var {_id} = req.user;
        var newElement = Object.assign({},
            FacturaStruct,
            {
                "estadoFactura":  "Pendiente",
                "fechaFactura": new Date().getTime(),
                "idPersona":new ObjectID(_id) 
            }
        );
        FacturasColl.insertOne(newElement, {}, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(404).json({ "error": "No se pudo Insertar" });
            }
            return res.status(200).json({ "n": result.insertedCount, "obj": result.ops[0] });
        });
    });


  router.put('/aceptar', (req, res, next) => {
      var {_id} = req.user;
      req.body.by= new ObjectID(_id);
      var query = {"factura": new ObjectID(req.body.id),"proveedor":new ObjectID(_id)};
      var update = { "$set": {estado:"ENT"}};
      FacturaDetColl.updateMany(query, update, (err, rst) => {
          if(err){
            console.log(err);
            return res.status(400).json({"error": "Error al actualizar documento"});
          }
          return res.status(200).json(rst);
        });


  });

  router.put('/pagar', (req, res, next) => {
      var {_id} = req.user;
      req.body.by= new ObjectID(_id);
      var query = {"factura": new ObjectID(req.body.id),"proveedor":new ObjectID(_id)};
      var update = { "$set": {estado:"PAG"}};
      FacturaDetColl.updateMany(query, update, (err, rst) => {
          if(err){
            console.log(err);
            return res.status(400).json({"error": "Error al actualizar documento"});
          }
          return res.status(200).json(rst);
        });


  });

  router.put('/cancelar', (req, res, next) => {
      var {_id} = req.user;
      req.body.by= new ObjectID(_id);
      var query = {"factura": new ObjectID(req.body.id),"proveedor":new ObjectID(_id)};
      var update = { "$set": {estado:"CNC"}};
      FacturaDetColl.updateMany(query, update, (err, rst) => {
          if(err){
            console.log(err);
            return res.status(400).json({"error": "Error al actualizar documento"});
          }
          return res.status(200).json(rst);
        });


  });




  router.delete('/:id', (req, res, next) => {
      var { _id} = req.user;
      var query = {"by": new ObjectID(_id)}
      OrdenesColl.remove(query, (err, result) => {
        if(err) {
          console.log(err);
          return res.status(400).json({"error":"Error al eliminar documento"});
        }
        return res.status(200).json(result);
      });
      //var soft = req.params.soft;
      // thingsCollection = thingsCollection.filter( (e, i) => {
      //   return (e.id !== id );
      // } ); //
      // res.status(200).json({ 'msg': 'Elemento ' + id + ' fué eleminido!!!' });
    });// put /

  return router;
}
module.exports =  OrdenesInit;