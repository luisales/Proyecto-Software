// ES6
// ES5 var React = require('react');
// var Component = React.Component;
import React, { Component } from 'react';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';
import { paxios } from '../../../../Utilities';

/*
  module.exports = class Login .....
*/
export default class DetailAdd extends Component {
  constructor() {
    super();
    //definición del estado inicial
    this.state = {
      Codigo: '',
      Nombre:'',
        Precio:'',
      descripcion:'',
      img: '',
      error: false
    };
    //Para el autobinding
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
  }

  onChangeHandler(e) {
    const { name, value } = e.target;
    //validar
    this.setState({ ...this.state, [name]: value });
  }
  onSaveBtnClick(e) {
    const { Codigo, Nombre, Precio, descripcion, img} = this.state;
    paxios.post('/api/things', {Codigo, Nombre, Precio, descripcion, img })
    
      .then(({ data }) => {
        this.props.history.goBack();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error al crear nuevo combo" });
      })
  }

  render() {
    return (
      <section>
        <h1>Crear Nuevo Combo</h1>
        <section className="main fix640">
        <Campo
            caption="Codigo"
            value={this.state.Codigo}
            name="Codigo"
            onChange={this.onChangeHandler}
          />
        <Campo
            caption="Nombre"
            value={this.state.Nombre}
            name="Nombre"
            onChange={this.onChangeHandler}
          />
          
          <br></br>
        <Campo
            caption="Precio"
            value={this.state.Precio}
            name="Precio"
            onChange={this.onChangeHandler}
          />

          <br></br>
          <Campo
            caption="Descripción"
            value={this.state.descripcion}
            name="descripcion"
            onChange={this.onChangeHandler}
          />
          <Campo
            caption="Imagen"
            value={this.state.img}
            name="img"
            onChange={this.onChangeHandler}
          />
          <br></br>
          {(this.state.error && true) ? (<div className="error">{this.state.error}</div>) : null}
          <section className="action">
            <Button
              caption="Crear Combo"
              onClick={this.onSaveBtnClick}
              customClass="primary"
            />
            <br></br>
            <Button
              caption="Cancelar"
              customClass="secondary"
              onClick={(e) => { this.props.history.goBack() }}
            />
          </section>
        </section>
      </section>
    );
  }
}
