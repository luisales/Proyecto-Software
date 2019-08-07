import  React, { Component } from 'react';
import { IoIosCloseCircleOutline,  IoIosCheckmarkCircleOutline, IoIosInformationCircleOutline, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import {Link} from 'react-router-dom';
import { paxios } from '../../../../Utilities';

import "./Ordenes.css";

export default class Ordenes extends Component{


  constructor() {
    super();
    this.state = {
      things: [],
      hasMore: true,
      page: 1,
      intervalIsSet: false,
      itemsToLoad: 10
    }
   
  }

  
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 2000);
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
    const uri = `/api/ordenes`;
    paxios.get(uri)
      .then(
        ({ data }) => {
          console.log(data);
          this.setState(
            {
              things: data
            }
          )
        })
  };
  logout(e){
    localStorage.clear();
    window.location.href = '/';
}

 
    render(){
        const { things } = this.state;
        return (
          <section>
            <h1>Ordenes
         
            </h1>

            <section >
          {things.length <= 0
            ? ''
            : things.map((thing) => (
              <div className="Contenedor" key={thing._id}>
               
                <div>
              <span>Pedido: {thing._id}</span></div>
              <div>
              <span>Estado de la orden: {thing.estadoFactura}</span></div>
              
                 
            </div>
            ))}
          
        </section>
          </section>
        );
}
}