import React from 'react';
import './App.css';
import { Capa } from './components/Capa';
import { Produtos } from './components/Produtos';
import { MdSearch } from 'react-icons/md'

class App extends React.Component {
  constructor() {
    super()

    this.titulo = "Programando meu primeiro app React"
    const formatadorDePreco = Intl.NumberFormat(
      'pt-BR', {currency: 'BRL', style: 'currency'}
    )

    this.lapis = {
      nome: 'lápis hb2',
      valor: 2,
      preco: formatadorDePreco.format(2)
    }
  }

  render(){
    return (
      <>
        <Capa />
        <Pesquisa />
        {10*5}

        {/* <strong>{this.lapis.nome}</strong>
        <p>{this.lapis.preco}</p> */}

        <Produtos />
      </>
  )}
}

function Pesquisa() {
  return (
    <div>
      <form>
        <label htmlFor='search'></label>
        <input id='search' />
        <button>
          <MdSearch />
        </button>
      </form>
    </div>
  )
}

// function App() {
//   const titulo = "Programando meu primeiro app React"
//   const formatadorDePreco = Intl.NumberFormat(
//     'pt-BR', {currency: 'BRL', style: 'currency'}
//   )

//   const lapis = {
//     nome: 'lápis hb2',
//     valor: 2,
//     preco: formatadorDePreco.format(2)
//   }

//   return (
//     <>
//       <h1>{titulo}</h1>
//       <h2>Lojinha virtual</h2>
      
//       <strong>{lapis.nome}</strong>
//       <p>{lapis.preco}</p>
//     </>

//   );
// }

export default App;
