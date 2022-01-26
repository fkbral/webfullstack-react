import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './styles.css'

// 6. Crie um toggle para alterar entre light/dark mode de um site
//   1. crie uma página que terá um estado chamado theme que receberá o valor ‘light’ ou ‘dark’ (esta página será pai das demais partes);
//   2. crie um botão para alternar entre as duas opções;
//   3. crie 1 ou mais seções nesta página em componentes separados (exemplo: banner, header);
//   4. repasse o valor do theme para estes componentes via props e renderize com cores diferentes utilizando a propriedade “style”.

//         Exemplo: background: (theme === ‘light’ ? ‘#fff’ : ‘#000’)

export class ThemedContainer extends React.Component {
  constructor() {
    super()
    this.state = { theme: 'dark' }
  }

  render() {
    const handleSwitchTheme = () => {
      const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark'

      this.setState({ theme: nextTheme })
    }

    return (
      <div className={`theme-${this.state.theme} themed-container`}>
        <button onClick={handleSwitchTheme}>Alternar tema</button>
        <Header theme={this.state.theme} />
        <Footer theme={this.state.theme} />
      </div>
    )
  }
}
