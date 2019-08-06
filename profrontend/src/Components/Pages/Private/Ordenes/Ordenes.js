import  React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { IoIosCloseCircleOutline, IoIosInformationCircleOutline, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import {Link} from 'react-router-dom';
import { MdRestaurant } from 'react-icons/md';


import { paxios } from '../../../../Utilities';

import "./Ordenes.css";

export default class Ordenes extends Component {
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
          <span>{thing.Nombre}</span>
          <div>
          <span className = "deleteThing">
          <Link to={`/detailDelete/${thing._id}`}>
          <IoIosCloseCircleOutline size="2em"/>
          </Link>
          </span>
          <span className="updateThing">
          <Link to={`/detailupdate/${thing._id}`}>
              <IoIosInformationCircleOutline size="2em"/>
            </Link>
          </span>
          </div>
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
      <h1><MdRestaurant/>
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
