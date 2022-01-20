import React from "react";

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
    return(
      <ul>
        {this.state.pessoas.map(pessoa => 
          // <Pessoa key={} id={pessoa.id} />
          <React.Fragment key={pessoa.id}>
            <li>
              <p><strong>id: </strong>{pessoa.id}</p>
              <p><strong>nome: </strong>{pessoa.nome}</p>
              <p><strong>cpf: </strong>{pessoa.cpf}</p>
              <p><strong>idade: </strong> {pessoa.idade}</p>
            </li>
            <hr />
          </React.Fragment>
        )}
      </ul>
    )
  }
}