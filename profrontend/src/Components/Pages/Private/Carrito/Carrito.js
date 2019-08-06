import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { IoIosAdd,IoIosCart, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import { paxios } from '../../../../Utilities';
import {MdDelete } from "react-icons/md";
import './Carrito.css'
export default class Carrito extends Component{

  constructor(){
    super();
    this.state={
      things:[],
      hasMore:true,
      page:1,
      intervalIsSet: false,
      itemsToLoad:10
    }}
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
  getDataFromDb = () => {
    const uri = `/api/carrito`;
    paxios.get(uri)
    .then(
      ({data})=>{
        console.log(data);
        this.setState(
          {
            things:data
          }
        )
      })
  };

  pedido=()=>{
    paxios.post(`/api/ordenes`)
    .then(({ data }) => {
      console.log("Enviado");
    })
    .catch((error) => {
      console.log(error);
      this.setState({ error: "Error al crear " });
    })
  }

  delete=(codigoProducto)=>{
    console.log(codigoProducto);
    paxios.delete(`/api/carrito/${codigoProducto}`)
    .then(({ data }) => {
      console.log("eliminado");
    })
    .catch((error) => {
      console.log(error);
      this.setState({ error: "Error al crear " });
    })
  }

  render(){
    const { things } = this.state;
      return (
        <section>
          <h1>Ordenes
          <Link className="linke" to="detailcar">
            <button className="buttonpagar" onClick={this.pedido}>Hacer pedido</button>
          </Link>
          </h1>
          <section className="overr">
          {things.length <= 0
          ? 'Seleccione un producto para realizar su compra'
          : things.map((thing) => (
              <div className="thingItem" key={thing._id}>
                <span> {thing.total}</span>
                <span> {thing.nombreProducto}</span>
                <span> L. {thing.Precio}</span>
              
                <MdDelete onClick={this.delete.bind(this,thing.codigoProducto)} size="2em"/>
                
              </div>
            ))}
          </section>

        </section>
      );
}
}