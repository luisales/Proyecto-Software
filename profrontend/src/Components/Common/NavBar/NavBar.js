import React from 'react';
import { NavLink } from 'react-router-dom';
// https://react-icons.netlify.com/
import { IoIosLogIn,IoIosBus,IoIosCart,IoIosPaperPlane, IoIosPaper,IoIosClipboard,IoIosHome, IoIosKey, IoIosToday, IoIosList } from 'react-icons/io';
import './NavBar.css';

const NavItem = ({ to, children, ...rest }) => {
  return (
    <NavLink activeClassName="activeNav" exact to={to}>{children}</NavLink>
  );
};

export default ({auth, unSetAuth})=>{
  console.log(auth);
  if(!auth.logged){
    return(
      <nav>
        <NavItem to="/login"><IoIosLogIn/>&nbsp;</NavItem>
        <NavItem to="/signin"><IoIosKey/>&nbsp;</NavItem>
      </nav>
    )
  } else if(auth.user.permiso) {
    return (
      <nav>
        <NavItem to="/"><IoIosHome/>&nbsp;</NavItem>
        <NavItem to="/main"><IoIosBus />&nbsp;</NavItem>
        <NavItem to="/backlog"><IoIosPaper/>&nbsp;</NavItem>
        <NavItem to="/menu"><IoIosClipboard/>&nbsp;</NavItem>
        <NavItem to="/carrito"><IoIosCart/>&nbsp;</NavItem>
        <NavItem to="/ordenes"><IoIosPaperPlane/>&nbsp;</NavItem>
      </nav>
    )
  }
  else{
    return(
      <nav>
        <NavItem to="/"><IoIosHome/>&nbsp;</NavItem>
        <NavItem to="/main"><IoIosBus />&nbsp;</NavItem>
        <NavItem to="/menu"><IoIosClipboard/>&nbsp;</NavItem>
        <NavItem to="/carrito"><IoIosCart/>&nbsp;</NavItem>
        <NavItem to="/ordenes"><IoIosPaperPlane/>&nbsp;</NavItem>
       
      </nav>
    )
  }
}
