import { MdFirstPage } from 'react-icons/md'
import './index.css'

export function Capa() {
  const titulo = "Programando meu primeiro app React"

  return(
    <div data-capa>
      <MdFirstPage />
      <h1>{titulo}</h1>
      <h2>Lojinha virtual</h2>
    </div>
  )
}