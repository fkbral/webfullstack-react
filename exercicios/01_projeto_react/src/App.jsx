import React from 'react'

import './App.css'
import { Button } from './components/Button'
import { ImageFeed } from './components/ImageFeed'
import { FaDoorOpen } from 'react-icons/fa'
import { Counter } from './components/Counter'
import { PersonsList } from './components/PersonsList'
import { AttendanceList } from './components/05_AttendanceList'
import { ThemedContainer } from './components/06_07_ThemedContainer'
import { GithubProfile } from './components/08_GithubProfile'

function App() {
  const imageUrl =
    'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  const defaultImgUrl = 'https://source.unsplash.com/random/?city,night'

  const images = [defaultImgUrl, defaultImgUrl, defaultImgUrl, defaultImgUrl]

  return (
    <div className="app">
      {/* <img src={imageUrl} alt="foto da tela de um laptop" width={180} /> */}
      {/* <img src={imageUrl} alt="" style={{width: 180, objectFit: 'cover'}} /> */}

      {/* <Counter /> */}
      {/* <PersonsList /> */}
      <GithubProfile />
      {/* <AttendanceList /> */}
      {/* <ThemedContainer /> */}
      {/* 
      <Button
        isLoading={true}
        size={96}
      />

      <Button size={32}>
        <FaDoorOpen />
        <span>
          <p>Entre </p>
          <strong>no sistema</strong>
        </span>
      </Button>

      <button id="botao-de-login">
        <FaDoorOpen style={{fontSize: '100px'}} />
        <span>Entre no sistema</span>
      </button>

      <ImageFeed columnCount={3} />

      <Button 
        size={24}
      >
        Voltar ao topo
      </Button> */}
    </div>
  )
}

export default App
