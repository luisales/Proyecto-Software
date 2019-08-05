import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Button from '../../../Common/Btns/Buttons';
import './Home.css';
import { IoIosLogOut } from 'react-icons/io';

export default class Home extends Component{
  render() {
    return (
      
        <div className="home">
          <InfiniteScroll>  
            <h1>Pollos Vimart</h1>
            <img src="https://i.imgur.com/8kU7Mt2.jpg" />
            <div>&nbsp;</div>
            {(this.props.auth.logged) ? (<div className="half"><Button customClass="primary" onClick={(e) => { this.props.setUnAuth(false)}}><IoIosLogOut/>&nbsp;Logout</Button></div>):null}
            </InfiniteScroll>
        </div>
    );
  }

}
