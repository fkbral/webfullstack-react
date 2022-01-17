import React from 'react';
import './App.css';
import { Capa } from './components/Capa';
import { Produtos } from './components/Produtos';
import { MdSearch } from 'react-icons/md'
import { Titulo } from './components/Titulo';
import { Menu } from './components/Menu';

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
        {/* <CartaDeBaralho
          naipe= {'copas'}
          valor={'Q'}
          cor={'vermelha'}
          carta={
            {
              naipe: 'copas',
              numero: 'Q',
              cor: 'vermelha',
            }
          }
        /> */}
        <Menu 
          // perfil={{
          //   nome: 'Fulano da Silva',
          //   avatarUrl: 'https://source.unsplash.com/random/?profile picture'
          // }}
        />
        <Capa />
        <Titulo 
          id="main-title"
          tamanho={'xl'}
          texto="Título da página"
          style={{color: 'steelblue'}}
        />
        <Pesquisa />
        {10*5}

        {/* <strong>{this.lapis.nome}</strong>
        <p>{this.lapis.preco}</p> */}

        <Produtos />

        <footer
          style={{
            backgroundColor: 'steelblue'
          }}
        >
        <Titulo 
          tamanho={'md'}
          texto="Página feita durante o curso de Web FullStack"
        />
        </footer>
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
