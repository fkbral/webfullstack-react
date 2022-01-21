import React from "react"
import PropTypes from "prop-types"

export class Person extends React.Component {
  render() {
    const {className, ...rest} = this.props
    
    return(
      <>
        <li {...rest}>
          <p className={className}><strong>id: </strong>{this.props.pessoa.id}</p>
          <p><strong>nome: </strong>{this.props.pessoa.nome}</p>
          <p><strong>cpf: </strong>{this.props.pessoa.cpf}</p>
          <p><strong>idade: </strong> {this.props.pessoa.idade}</p>
        </li>
        <button onClick={this.props.onDelete}>Deletar pessoa</button>
        <hr />
      </>
    )
  }
}

Person.propTypes = {
  pessoa: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string,
    cpf: PropTypes.string,
    idade: PropTypes.number,
  }),
  onDelete: PropTypes.func,
}