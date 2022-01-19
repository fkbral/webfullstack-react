import { MdFirstPage } from 'react-icons/md'
import './index.css'
import PropTypes from 'prop-types'
import React from 'react'

export class Capa extends React.Component {
  constructor(props) {
    super()
    // this.titulo = "Programando meu primeiro app React"
    this.state = {corDoMenu: props.cor ?? 'steelblue'}
  }

  render(){
    const titulo = "Programando meu primeiro app React"

    const mudaCorDaCapa = (corEscolhida) => {
      // console.log(`estado anterior: ${this.state.corDoMenu}`)
      this.setState({ corDoMenu: corEscolhida })
      // console.log(`estado atual: ${this.state.corDoMenu}`)
      // console.log('click')
      // console.log(`valor anterior da cor: ${this.cor}`)
      // this.cor = corEscolhida
      // console.log(`valor atual da cor: ${this.cor}`)
    }

    const deixaCapaVermelha = () => {
      this.setState({ corDoMenu: 'red' })
    }

    const deixaCapaVerde = () => {
      this.setState({ corDoMenu: 'green' })
    }

    const deixaCorPadrao = () => {
      this.setState({ corDoMenu: 'steelblue' })
    }   

    return(
      <>
        <div
          data-capa
          style={{backgroundColor: this.state.corDoMenu}}
        >
          <MdFirstPage />
          <h1>{titulo}</h1>
          <h2>Lojinha virtual</h2>
        </div>

        <footer>
          <button onClick={() => mudaCorDaCapa('red')}>Deixar capa vermelha</button>
          {/* <button onClick={() => this.setState({ corDoMenu: 'green' })}>Deixar capa verde</button> */}
          <button onClick={() => mudaCorDaCapa('green')}>Deixar capa verde</button>
          <button onClick={() => mudaCorDaCapa('steelblue')}>Deixar capa na cor padrão</button>
        </footer>
      </>
    )
  }
}

// export function Capa(props) {
//   // constructor(props) {
//   //   super()
//   //   // this.titulo = "Programando meu primeiro app React"
//   //   this.state = {corDoMenu: props.cor ?? 'steelblue'}
//   //   this.cor = props.cor ?? 'steelblue'
//   // }

//   let cor = props.cor ?? 'steelblue'

//   const titulo = "Programando meu primeiro app React"

//   const mudaCorDaCapa = (corEscolhida) => {
//     // this.setState({ corDoMenu: corEscolhida })
//     console.log('click')
//     console.log(`valor anterior da cor: ${cor}`)
//     cor = corEscolhida
//     console.log(`valor atual da cor: ${cor}`)
//   }

//   const deixaCapaVermelha = () => {
//     this.setState({ corDoMenu: 'red' })
//   }

//   const deixaCapaVerde = () => {
//     this.setState({ corDoMenu: 'green' })
//   }

//   const deixaCorPadrao = () => {
//     this.setState({ corDoMenu: 'steelblue' })
//   }   

//   return(
//     <>
//       <div
//         data-capa
//         style={{backgroundColor: cor}}
//       >
//         <MdFirstPage />
//         <h1>{titulo}</h1>
//         <h2>Lojinha virtual</h2>
//       </div>

//       <footer>
//         <button onClick={() => mudaCorDaCapa('red')}>Deixar capa vermelha</button>
//         {/* <button onClick={() => this.setState({ corDoMenu: 'green' })}>Deixar capa verde</button> */}
//         <button onClick={() => mudaCorDaCapa('green')}>Deixar capa verde</button>
//         <button onClick={() => mudaCorDaCapa('steelblue')}>Deixar capa na cor padrão</button>
//       </footer>
//     </>
//   )
// }

// export function Capa({cor}) {
//   const titulo = "Programando meu primeiro app React"

//   return(
//     <>
//       <div data-capa style={{backgroundColor: cor ?? 'steelblue'}}>
//         <MdFirstPage />
//         <h1>{titulo}</h1>
//         <h2>Lojinha virtual</h2>
//       </div>

//       <footer>
//         <button>Deixar capa vermelha</button>
//         <button>Deixar capa verde</button>
//       </footer>
//     </>
//   )
// }

Capa.propTypes = {
  cor: PropTypes.string
}