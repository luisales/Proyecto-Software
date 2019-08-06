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
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  
  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Notificacion",
      message: "Pedido Aceptado!",
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
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
            ? 'No tiene ningun pedido'
            : things.map((thing) => (
              <div className="thingItem_man" key={thing._id}>
               <div>
                <div>
              <span>Pedido: {thing._id}</span></div>
              <div>
              <span>Estado de la orden: {thing.estadoFactura}</span></div>
              
              <span className="updateThing">
              
              </span>
              <span className="updateThing">
                  <IoIosCheckmarkCircleOutline className="iconoadd2" size="2em"/>
              </span>
              <span className="updateThing">
                  <IoIosCloseCircleOutline  className="iconoadd2"size="2em"/>
              </span>
              </div>
                 
            </div>
            ))}
          
        </section>
          </section>
        );
}
}