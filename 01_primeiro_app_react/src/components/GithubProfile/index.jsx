import './styles.css'
import React from 'react'

export class GithubProfile extends React.Component {
  constructor() {
    super()
    this.state = { user: {}, count: 0 }
  }

  async getUserProfile() {
    const response = await fetch('https://api.github.com/users/fkbral', {
      method: 'get',
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

  componentDidMount() {
    this.getUserProfile()
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
        <h1>Meu perfil</h1>

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
