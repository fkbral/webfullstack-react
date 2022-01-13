import './App.css'
import { ImageFeed } from './components/ImageFeed'

function App() {
  const imageUrl = "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  const defaultImgUrl = "https://source.unsplash.com/random/?city,night"

  const images = [
    defaultImgUrl,
    defaultImgUrl,
    defaultImgUrl,
    defaultImgUrl,
  ]

  return (
    <div className='app'>
      <img src={imageUrl} alt="foto da tela de um laptop" width={180} />
      {/* <img src={imageUrl} alt="" style={{width: 180, objectFit: 'cover'}} /> */}

      <ImageFeed />
    </div>
  )
}

export default App
