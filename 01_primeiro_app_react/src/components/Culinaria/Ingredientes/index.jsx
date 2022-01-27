import React from "react";
import PropTypes from 'prop-types'

export class Ingredientes extends React.Component {
  render(){
    return(
      <>
        Ingredientes disponíveis
        <ul>
          {this.props.ingredientes.map(ingrediente =>
            <li>{ingrediente}</li>
            )}
        </ul>
      </>
    )
  }
}

Ingredientes.propTypes = {
  ingredientes: PropTypes.string.isRequired
}