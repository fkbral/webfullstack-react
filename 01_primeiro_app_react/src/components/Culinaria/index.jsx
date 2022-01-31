import React from 'react'
import { Ingredientes } from './Ingredientes'
import { Receita } from './Receita'

export class Culinaria extends React.Component {
  constructor() {
    super()
    this.state = {
      ingredientes: [
        'cenoura',
        'ovo',
        'farinha',
        'óleo',
        'chocolate',
        'uva',
        'maça',
      ],
    }
  }

  render() {
    // const ingredientes = [
    //   'cenoura',
    //   'ovo',
    //   'farinha',
    //   'óleo',
    //   'chocolate',
    //   'uva',
    //   'maça'
    // ]

    const receitaBolo = this.state.ingredientes.filter(
      ingrediente => ingrediente !== 'uva' && ingrediente !== 'maça'
    )

    return (
      <div>
        <Ingredientes ingredientes={this.state.ingredientes} />
        <Receita nome="Bolo de Cenoura" ingredientes={receitaBolo} />
      </div>
    )
  }
}
