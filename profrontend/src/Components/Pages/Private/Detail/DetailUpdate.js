import React, { Component } from 'react';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';
import { paxios } from '../../../../Utilities';


export default class DetailUpdate extends Component {
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

  componentDidMount(){
    const { match: {params}} = this.props;
    const uri = `/api/things/${params.id}`;
    paxios.get(uri)
    .then(
      ({data})=>{
        this.setState({...data});
      }
    )
    .catch(
      (err)=>{
        this.setState({error:"No se pudo cargar el combo."});
      }
    );
  }
  onChangeHandler(e) {
    const { name, value } = e.target;
    //validar
    this.setState({ ...this.state, [name]: value });
  }
  onSaveBtnClick(e) {
    const { Codigo, Nombre, Precio, descripcion, img, _id } = this.state;
    paxios.put(`/api/things/${_id}`, { Codigo, Nombre, Precio, descripcion, img })
      .then(({ data }) => {
        this.props.history.push("/backlog");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error al actualizar el combo" });
      })
  }
// {this.props.match.params.Nombre}
  render() {
    console.log(this.state);
    return (
      <section>
        <h1>
          Mantenimiento Combos
        </h1>
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
              caption="Actualizar Combo"
              onClick={this.onSaveBtnClick}
              customClass="primary"
            />
            <br></br>
            <Button
              caption="Cancelar"
              customClass="secondary"
              onClick={(e) => { this.props.history.push('/backlog') }}
            />
          </section>
        </section>
      </section>
    );
  }
}
