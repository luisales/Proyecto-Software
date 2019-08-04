import React,  {Component} from 'react';
import {paxios, getLocalStorage, setLocalStorage} from '../../../../Utilities';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import './Dashboard.css';
import { MdAdd as Plus } from 'react-icons/md';
import { IoIosInformationCircleOutline, IoIosSync, IoMdAddCircle } from 'react-icons/io';
import ThingBox from './ThingBox';
import DatePanel from './DatePanel';
import { Map, GoogleApiWrapper } from 'google-maps-react';
function getDDDate(ddDate){
  const year = ddDate.getFullYear(), month = ddDate.getMonth() + 1, date = ddDate.getDate();
  let dmonth = (month < 10) ? '0' + String(month) : String(month);
  let dDay = (date < 10) ? '0' + String(date) : String(date);
  return `${year}${dmonth}${dDay}`;
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWdgUnSVJutaBRgr4MXiaQQlL_0DGK3-4'
})(MapContainer);
export default class Dashboard extends Component{
  constructor(){
    super();
    const CD = new Date()
    let localState = JSON.parse(getLocalStorage('dshboard')) || {
      currentDate: CD,
      dd: getDDDate(CD)
    };
    if(typeof localState.currentDate === "string"){
      localState.currentDate = new Date(localState.currentDate);
    }

    this.state = {
      things:[],
      ...localState
    };
    this.dateAfterHandler = this.dateAfterHandler.bind(this);
    this.dateBeforeHandler = this.dateBeforeHandler.bind(this);
    this.dateBeforeHandler = this.dateBeforeHandler.bind(this);
    this.resetDate = this.resetDate.bind(this);
  }
  componentDidMount(){
    this.loadData();
  }
  loadData(){
    paxios.get(`/api/things/page/1/3/${this.state.dd}`)
      .then(({ data, status }) => {
        console.log(data);
        this.setState({...data});
      })
      .catch((err) => {
        console.log(err);
      })
    ;
  }
  dateBeforeHandler(){
    let tCDate = this.state.currentDate;
    tCDate.setDate(tCDate.getDate()-1);
    let newState = { currentDate: tCDate, dd: getDDDate(tCDate) }
    setLocalStorage('dshboard',JSON.stringify(newState));
    this.setState( newState, ()=>this.loadData());
  }
  dateAfterHandler(){
    let tCDate = this.state.currentDate;
    tCDate.setDate(tCDate.getDate() + 1);
    let newState = { currentDate: tCDate, dd: getDDDate(tCDate) }
    setLocalStorage('dshboard', JSON.stringify(newState));
    this.setState(newState, () => this.loadData());
  }
  resetDate() {
    let tCDate = new Date();
    let newState = { currentDate: tCDate, dd: getDDDate(tCDate) }
    setLocalStorage('dshboard', JSON.stringify(newState));
    this.setState(newState, () => this.loadData());
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
  render(){
    //
    const mapStyles = {
  width: '100%',
  height: '100%',
    };
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />
    );
    
    let bigThing = (
      <ThingBox thingType="big">
     
      </ThingBox>
    );
    let smallThingArr =[];
    smallThingArr.push((
      <ThingBox key={1}>
        <Link to={`/backlogadd/small/${this.state.dd}`} >
            <span>dsdsds</span>
        </Link>
      </ThingBox>
    ));
    smallThingArr.push((
      <ThingBox key={2}>
        <Link to={`/backlogadd/small/${this.state.dd}`} >
         
        </Link>
      </ThingBox>
       //<span className="circle"><Plus /></span> Boton de circulo
    ));
    console.log(this.state.things);
    if (this.state.things.length>0) {
      console.log("entro");
      let bigthings = this.state.things.filter(
        (e)=>{
          console.log(e);
          return e.type === "big";
        }
      );
      console.log(bigthings);
      if (bigthings.length) {
        bigThing = (<ThingBox thingType="big">
            <h2>{bigthings[0].descripcion}</h2>
        </ThingBox>
        );
      }
      let smallthings = this.state.things.filter(
        (e, i) => {
          return e.type === "small";
        }
      );
      if (smallthings.length) {
        smallThingArr = smallthings.map(
          (e, i)=>{
            return (
              <ThingBox key={i}>
                <h2>{e.descripcion}</h2>
              </ThingBox>
            );
          }
        );
        if(smallThingArr.length === 1){
          smallThingArr.push((<ThingBox key={2}>
            <Link to={`/backlogadd/small/${this.state.dd}`} >
              <span className="circle"><Plus /></span>
            </Link>
          </ThingBox>));
        }
      }
    }

    const items = this.state.things.map(
      (thing)=>{
        return (
          <div className="thingItem"  >
             <h2>prueba</h2>
            <span>{thing.descripcion}</span>
            <span className="updateThing"></span>
            
          </div>);
      }
      
    );
    if(!items.length) items.push(
      <div className="thingItem" key="pbBackLogAddOne">
        <span>Nuevo Combo</span>
        
      </div>);
    return(
      <section>
        <h1>Menu</h1>
      
        <section className="main cardHolder fix640">
           
          
        {bigThing}
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
         
          
        </section>
        
      </section>
    );
    
  }
}
//{bigThing}
//{items}
//{smallThingArr}
