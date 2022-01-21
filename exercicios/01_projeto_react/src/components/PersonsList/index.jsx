import React from "react";
import { Person } from "../Person";

// pessoa tem id, nome, cpf e idade
export class PersonsList extends React.Component {
  constructor() {
    super()
    this.state = {
      pessoas : [
        {
          id: 'ab231',
          nome: 'Zé da Silva',
          cpf: '123.456.789-01',
          idade: 20,
        },
        {
          id: 'df221',
          nome: 'Maria da Silva',
          cpf: '999.456.789-03',
          idade: 23,
        },
      ]
    }
  }

  render() {
    const handleDeletePerson = (personToDelete) => {
      this.setState({
        pessoas: this.state.pessoas.filter(
          person => person.id !== personToDelete.id)
      })
    }

    return(
      <ul>
        {this.state.pessoas.map((pessoa) =>
          <Person
            id={`pessoa-${pessoa.id}`}
            className={'ativo'}
            key={pessoa.id}
            onDelete={() => handleDeletePerson(pessoa)}
            pessoa={pessoa}
            // id={pessoa.id}
            // nome={pessoa.nome}
            // cpf={pessoa.cpf}
            // idade={pessoa.idade}
          />
          // <React.Fragment key={pessoa.id}>
          //   <li>
          //     <p><strong>id: </strong>{pessoa.id}</p>
          //     <p><strong>nome: </strong>{pessoa.nome}</p>
          //     <p><strong>cpf: </strong>{pessoa.cpf}</p>
          //     <p><strong>idade: </strong> {pessoa.idade}</p>
          //   </li>
          //   <hr />
          // </React.Fragment>
        )}
      </ul>
    )
  }
}