import React from 'react'

export class Counter extends React.Component {
  constructor() {
    super()
    this.state = { contador: 0 }
  }

  render() {
    const handleDecrementCount = () => {
      this.setState({
        contador: this.state.contador > 0 ? this.state.contador - 1 : 0 
      }) 
    }

    return(
      <div>
        <p>Contagem atual: {this.state.contador}</p>
        <button 
          onClick={() => this.setState({contador: this.state.contador + 1})}
        >
          incrementa contagem
        </button>
        <button
          // onClick={() => this.setState({
          //   contador: this.state.contador > 0 ? this.state.contador - 1 : 0 
          // })}
          onClick={handleDecrementCount}
        >decrementa contagem</button>
      </div>
    )
  }
}