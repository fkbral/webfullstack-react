import React from "react";
import PropTypes from 'prop-types'

export class Receita extends React.Component {
  render(){
    return(
      <>
      {this.props.nome}
        <ul>
          {this.props.ingredientes.map(ingrediente =>
            <li>{ingrediente}</li>
            )}
        </ul>
      </>
    )
  }
}

Receita.propTypes = {
  nome: PropTypes.string.isRequired,
  ingredientes: PropTypes.string.isRequired,
}