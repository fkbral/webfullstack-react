import './styles.css'
import React from 'react'

export class WeatherForecast extends React.Component {
  constructor() {
    super()
    this.state = {
      forecast: {},
      currentCity: 'Curitiba',
      currentTypedCity: 'Curitiba',
      searchedCity: 'Curitiba',
      count: 0,
    }
  }

  async getCityForecast(city) {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    )

    const forecast = await response.json()
    this.setState({ forecast })

    console.log(forecast)
  }

  async handleSearchCityForecast(event) {
    event.preventDefault()
    this.setState({ searchedCity: this.state.currentTypedCity })
  }

  componentDidMount() {
    this.getCityForecast(this.state.currentCity)
    console.log('só rodei quando o componente é montado pela primeira vez')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState)
  //   if (nextState.count >= 10) {
  //     return true
  //   }
  //   if (nextState.currentCity !== nextState.searchedCity) {
  //     this.setState({ currentCity: this.state.searchedCity })
  //     this.getCityForecast(this.state.searchedCity)
  //     return true
  //   }

  //   return false
  // }

  componentDidUpdate(previousProps, previousState) {
    // console.log('atualizou')
    // console.log(previousState)
    // if (previousState.count < this.state.count) {
    //   console.log('aumentou')
    //   return
    // }
    // if (previousState.count > this.state.count) {
    //   console.log('diminuiu')
    //   return
    // }
    // console.log('está igual')
    if (this.state.currentCity !== this.state.searchedCity) {
      this.setState({ currentCity: this.state.searchedCity })
      this.getCityForecast(this.state.searchedCity)
    }
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
          onSubmit={event => this.handleSearchCityForecast(event)}
        >
          <label htmlFor="city">Entre com o nome de uma cidade</label>
          <input
            id="city"
            type="text"
            onChange={event =>
              this.setState({ currentTypedCity: event.target.value })
            }
            value={this.state.currentTypedCity}
          />
          <button>Pesquisar cidade</button>
        </form>

        <h1>Previsão do tempo</h1>

        <ul>
          <li>
            <strong>Previsão atual: </strong>
            <p>{this.state.forecast.description}</p>
          </li>

          <li>
            <strong>Temperatura atual: </strong>
            <p>{this.state.forecast.temperature}</p>
          </li>

          <li>
            <strong>Velocidade do vento: </strong>
            <p>{this.state.forecast.wind}</p>
          </li>
        </ul>
      </div>
    )
  }
}
