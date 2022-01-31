import './styles.css'
import React from 'react'

export class GithubProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: {}, searchedUsername: '', count: 0 }
  }

  async getUserProfile(userName) {
    const response = await fetch(`https://api.github.com/users/fkbral`, {
      method: 'GET',
    })

    const user = await response.json()
    this.setState({ user })

    console.log(user)

    // console.log(response)
    // console.log(user)
    // console.log(user.name)
    // console.log(user.public_repos)
    // console.log(user.followers)
  }

  async handleSearchGithubUsername(event) {
    event.preventDefault()

    // this.getUserProfile(this.state.searchedUsername)
  }

  componentDidMount() {
    this.getUserProfile('fkbral')
    // this.getUserProfile('DaviGn')
    console.log('só rodei quando o componente é montado pela primeira vez')
  }

  componentDidUpdate(previousProps, previousState) {
    // console.log('atualizou')
    // console.log(previousState)

    if (previousState.count < this.state.count) {
      console.log('aumentou')
      return
    }

    if (previousState.count > this.state.count) {
      console.log('diminuiu')
      return
    }

    console.log('está igual')
  }

  render() {
    return (
      <div>
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

        <form
          action=""
          onSubmit={event => this.handleSearchGithubUsername(event)}
        >
          <label htmlFor="username">
            Entre com o nome de um usuário do Github
          </label>
          <input
            id="username"
            type="text"
            onChange={event =>
              this.setState({ searchedUsername: event.target.value })
            }
            value={this.state.searchedUsername}
          />
          <button>Pesquisar perfil do usuário</button>
        </form>

        <h1>Perfil do github</h1>

        <ul>
          <li>
            <strong>Nome: </strong>
            <p>{this.state.user.name}</p>
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
      </div>
    )
  }
}
