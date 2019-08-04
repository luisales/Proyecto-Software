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

export class Dashboard extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWdgUnSVJutaBRgr4MXiaQQlL_0DGK3-4'
})(Dashboard)
//{bigThing}
//{items}
//{smallThingArr}
