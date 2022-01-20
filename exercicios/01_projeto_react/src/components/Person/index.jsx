import React from "react"

export class Person extends React.Component {
  render() {
    return(
      <React.Fragment>
        <li>
          <p><strong>id: </strong>{this.props.pessoa.id}</p>
          <p><strong>nome: </strong>{this.props.pessoa.nome}</p>
          <p><strong>cpf: </strong>{this.props.pessoa.cpf}</p>
          <p><strong>idade: </strong> {this.props.pessoa.idade}</p>
        </li>
        <button onClick={this.props.onDelete}>Deletar pessoa</button>
        <hr />
      </React.Fragment>
    )
  }
}