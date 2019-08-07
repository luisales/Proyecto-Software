import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { IoIosAdd,IoIosCart,IoIosCash, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import { paxios } from '../../../../Utilities';
import {MdDelete } from "react-icons/md";
import './Carrito.css'
export default class Carrito extends Component{

  constructor(){
    super();
    this.state={
      things:[],
      facts: [],
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
        const {things} =this.state;
        var Subtotal=0,Variable=0,Isv=0,Total=0; 
        things.map((thing)=>{
        Total=
        Variable=parseInt(thing.Precio)*parseInt(thing.total);
        Subtotal+=Variable;
        Isv=parseFloat(Subtotal*0.15).toFixed(2); 
        Total=(parseFloat(Subtotal) + parseFloat(Isv)).toFixed(2);
        this.setState({
        subtotal:Subtotal.toFixed(2),
        ISV:Isv,
        total:Total
        })


      })

      })
  };
  

  ordenes=()=>{
    paxios.post(`/api/ordenes`)
    .then(({ data }) => {
     
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
        <section  className="Ordenar">
          <div>
         <h1>Ordenes </h1>
         
          </div>
       
        
          <section>
         
          {things.length <= 0
          ? ''
          : things.map((thing) => (
              <div className="thingStiff" key={thing._id}>
                <span> {thing.total}</span>
                <span> {thing.nombreProducto}</span>
                <span> L. {thing.Precio}</span>
            
              
                <MdDelete onClick={this.delete.bind(this,thing.codigoProducto)} size="2em"/>
                
              </div>
                  
                  
            ))}
            {things.length <= 0
          ?  <div className="Detalles">
          <div> <span>Sub L. 0</span></div>
          <div><span>ISV L. 0</span></div>
          <div> <span>Total L. 0</span></div></div>
          :
             <div className="Detalles">
          <div> <span>Sub L. {this.state.subtotal}</span></div>
          <div><span>ISV L. {this.state.ISV}</span></div>
          <div> <span>Total L. {this.state.total}</span></div></div>
            }
             {things.length <= 0
          ?''
        :<div className="ButtonPay">

          <button  onClick={this.ordenes}><IoIosCash size="2em"/></button>
            </div>
          }
          </section>

        </section>
      );
}
}