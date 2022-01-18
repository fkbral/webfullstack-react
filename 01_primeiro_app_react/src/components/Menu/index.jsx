import './styles.css'
import PropTypes from 'prop-types'
import React from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

export class Menu extends React.Component {
  // function dizOi() {
  //   return `Olá ${perfil.name}`
  // }

  constructor(props) {
    super()
    // this.state = {logado: props.perfil ? true : false}
    this.state = { logado: !!props.perfil, perfil: props.perfil }
  }

  render() {
    const { perfil } = this.props

    const handleSignOut = () => {
      this.setState({ logado: false, perfil: undefined })
    }

    const handleAnonymousSignIn = () => {
      this.setState({ 
        logado: true,
        perfil: {
          nome: 'Anônimo',
          avatarUrl: 'https://source.unsplash.com/random/?anonymous'
        } 
      })
    }

    return(
      <header className="menu">
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Sobre Nós</a></li>
            <li><a href="">Trabalhe Conosco</a></li>
          </ul>

          {this.state.logado ? (
            <aside>
              <figure>
                <img src={this.state.perfil.avatarUrl} alt={this.state.perfil.nome} />
                <figcaption>{this.state.perfil.nome}</figcaption>
              </figure>

              <button onClick={handleSignOut}>
                <FaSignOutAlt />
              </button>
            </aside>
          )
          :
          (
            <button onClick={handleAnonymousSignIn}>
              <FaSignInAlt />
              Fazer login como usuário anônimo
            </button>
          )
        }
        </nav>
      </header>
    )
  }

}

Menu.propTypes = {
  perfil: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  })
}

// Menu.defaultProps = {
//   perfil: {
//     nome: 'Felipe Cabral',
//     avatarUrl: 'https://github.com/fkbral.png'
//   }
// }