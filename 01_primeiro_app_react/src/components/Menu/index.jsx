import './styles.css'
import Proptypes from 'prop-types'

export function Menu({perfil}) {
  // function dizOi() {
  //   return `Olá ${perfil.name}`
  // }

  return(
    <header className="menu">
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Sobre Nós</a></li>
          <li><a href="">Trabalhe Conosco</a></li>
        </ul>

        {perfil && (
          <figure>
            <img src={perfil.avatarUrl} alt={perfil.nome} />
            <figcaption>{perfil.nome}</figcaption>
          </figure>
        )}
      </nav>
    </header>
  )
}

Menu.propTypes = {
  perfil: Proptypes.shape({
    nome: Proptypes.string.isRequired,
    avatarUrl: Proptypes.string,
  })
}

// Menu.defaultProps = {
//   perfil: {
//     nome: 'Felipe Cabral',
//     avatarUrl: 'https://github.com/fkbral.png'
//   }
// }