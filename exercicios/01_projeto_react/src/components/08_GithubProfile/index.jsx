// 1. Crie uma página para exibir as informações de um usuário do Github.

//     API do GitHub: [https://api.github.com/users/](https://api.github.com/users/DaviGn)[seuUsuario]

//     onde [seuUsuario] é o seu nome de usuário, exemplo: DaviGn, fkbral

//     1. armazene as informações (nome, e-mail, etc) em um estado e após carregados, exiba-os em tela;

//      b. crie um estado de loading para mostrar um carregamento enquanto aguarda o retorno da API do Github.

//     c. liste os repositórios deste usuário. Armazene esta listagem em outro estado e crie um loading para o mesmo, semelhante ao tópico b.

//     API do GitHub: [https://api.github.com/users/[seuUsuario]/repos](https://api.github.com/users/DaviGn/repos)

//     Adicional: coloque um console.log no fluxo de renderização do componente e observe quantas vezes é dado print :)

import './styles.css'
import { v4 as uuid } from 'uuid'
import React from 'react'

export class GithubProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      userRepositories: [],
      count: 0,
      isUserLoading: true,
      isUserRepositoriesLoading: true,
    }
  }

  async getUserProfile(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`, {
      method: 'get',
    })

    const user = await response.json()
    this.setState({ user, isUserLoading: false })

    // console.log(user)

    // console.log(response)
    // console.log(user)
    // console.log(user.name)
    // console.log(user.public_repos)
    // console.log(user.followers)
  }

  async getUserRepositories(userName) {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    )

    const userRepositories = await response.json()

    // console.log(userRepositories)

    this.setState({ userRepositories, isUserRepositoriesLoading: false })
  }

  componentDidMount() {
    setTimeout(() => {
      const userName = 'fkbral'

      this.getUserProfile(userName)
      this.getUserRepositories(userName)
    }, 2000)
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.count > this.state.count) {
      console.log('diminuiu')
    } else {
      console.log('aumentou')
    }
  }

  render() {
    return (
      <div className="github-profile-container">
        <div>
          <p>contador: {this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            incrementar
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            decrementar
          </button>
        </div>
        <h1>Meu perfil</h1>

        <h2>Dados do meu perfil</h2>

        {this.state.isUserLoading ? (
          'Carregando perfil do usuário'
        ) : (
          <ul className="github-profile-data">
            <li>
              <strong>Nome: </strong>
              <p>{this.state.user.name}</p>
            </li>

            <li>
              <strong>Bio: </strong>
              <p>{this.state.user.bio}</p>
            </li>

            <li>
              <strong>Número de seguidores: </strong>
              <p>{this.state.user.followers}</p>
            </li>

            <li>
              <strong>Número de repositórios: </strong>
              <p>{this.state.user.public_repos}</p>
            </li>
          </ul>
        )}

        <h2>Meus Repositórios</h2>

        {this.state.isUserRepositoriesLoading ? (
          'Carregando repositórios do usuário'
        ) : (
          <ul className="github-profile-data">
            {this.state.userRepositories.map(userRepository => (
              <React.Fragment key={uuid()}>
                <li>
                  <strong>Nome: </strong>
                  <p>{userRepository.name}</p>
                </li>

                {/* <li>
              <strong>Bio: </strong>
              <p>{this.state.user.bio}</p>
            </li>

            <li>
              <strong>Número de seguidores: </strong>
              <p>{this.state.user.followers}</p>
            </li>
            <li>
            
              <strong>Número de repositórios: </strong>
              <p>{this.state.user.public_repos}</p>
            </li> */}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
