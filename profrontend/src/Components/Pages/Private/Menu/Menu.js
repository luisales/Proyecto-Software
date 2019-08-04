import  React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { IoIosInformationCircleOutline, IoIosSync, IoMdAddCircle } from 'react-icons/io';
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
  render() {
  const items = this.state.things.map(
    (thing)=>{
      return (
        <div className="thingItem" key={thing._id}>
         <div> 
           <h1>{thing.Nombre}</h1>
           </div>
           <div> 
           <h2>{thing.descripcion}</h2>
           </div>
           <h2>{thing.Precio}</h2>
           <span><img src={thing.img}/></span>
        
          <span className="updateThing">
          
          </span>
        </div>);
    }
  );

  if(!items.length) items.push(
    <div className="thingItem" key="pbBackLogAddOne">
      <span>Nuevo Combo</span>
      <Link to="/detailadd"><IoMdAddCircle size="2.5em" /></Link>
    </div>);

  return (
    <section>
     <h1> <MdRestaurant/>
        Combos 
        <span className="addThing">
          <Link to="/detailadd">
            <IoMdAddCircle size="1.5em" />
          </Link>
        </span>
      </h1>
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
