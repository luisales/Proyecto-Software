import  React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {IoIosAdd, IoIosCart, IoIosInformationCircleOutline, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import {Link} from 'react-router-dom';
import { MdRestaurant } from 'react-icons/md';


import { paxios } from '../../../../Utilities';

import "./Menu.css";

export default class Menu extends Component {
  constructor(){
    super();
    this.state={
      things:[],
      hasMore:true,
      page:1,
      itemsToLoad:10
    }

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(page){
    const items  = this.state.itemsToLoad;
    const uri = `/api/things/page/${page}/${items}`;
    paxios.get(uri)
      .then(
        ({data})=>{
          const { things, totalThings} = data;
          const loadedThings = this.state.things;
          things.map((e)=>loadedThings.push(e));
          if(totalThings){
              this.setState({
                "things": loadedThings,
                "hasMore": (page * items < totalThings)
              });
          } else {
            this.setState({
              "hasMore": false
            });
          }
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      );
  }
  Registrar = (codigoProducto, nombreProducto, Precio) => {
    paxios.post('/api/carrito', { codigoProducto,nombreProducto,Precio})
      .then(({ data }) => {
        console.log("Agregar");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error al crear " });
      })
  }

  render() {
  const items = this.state.things.map(
    (thing)=>{
      return (
        <div className="thingItem" key={thing._id}>
         <div > 
           <h1 >{thing.nombreProducto}</h1>
           
        
           <h2>{thing.descripcion}</h2>
           
           <h2>L. {thing.Precio}</h2>
           <span><img src={thing.img}/></span>
         
           <button onClick={this.Registrar.bind(this, thing._id, thing.nombreProducto, thing.Precio,thing.by)} ><IoIosCart size="2em"/></button>
          <span className="updateThing">

          </span>
          </div>
        </div>);
    }
  );

  

  return (
    <section>
     <h1 className="titulo"> 
        Combos 
        <MdRestaurant/></h1>
      <div className="backlog" ref={(ref)=> this.scrollParentRef = ref}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={this.state.hasMore}
            useWindow={false}
            getScrollParent={()=>this.scrollParentRef}
            loader={<div key="pbBackLogLoading" className="thingItem center"><IoIosSync/></div>}
            >
              {items}
          </InfiniteScroll>
      </div>
      
     </section>
   );
  }
}
