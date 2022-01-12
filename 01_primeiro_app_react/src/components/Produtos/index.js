import './index.css'
import { v4 as uuid } from 'uuid'

export function Produtos() {
  const formatadorDePreco = Intl.NumberFormat(
    'pt-BR', {currency: 'BRL', style: 'currency'}
  )

  const produtos = [
    {
      id: uuid(),
      nome: 'lápis hb2',
      preco: formatadorDePreco.format(2)
    },
    {
      id: uuid(),
      nome: 'impressora',
      preco: formatadorDePreco.format(400)
    },
    {
      id: uuid(),
      nome: 'jaqueta',
      preco: formatadorDePreco.format(355.99)
    },
    {
      id: uuid(),
      nome: 'calça jeans',
      preco: formatadorDePreco.format(80.25)
    },
    {
      id: uuid(),
      nome: 'saia',
      preco: formatadorDePreco.format(120)
    },
    {
      id: uuid(),
      nome: 'vestido',
      preco: formatadorDePreco.format(700)
    },
    {
      id: uuid(),
      nome: 'bota',
      preco: formatadorDePreco.format(425)
    },
    {
      id: uuid(),
      nome: 'meia',
      preco: formatadorDePreco.format(10)
    },
    {
      id: uuid(),
      nome: 'tênis de corrida',
      preco: formatadorDePreco.format(240)
    },
    {
      id: uuid(),
      nome: 'camiseta branca',
      preco: formatadorDePreco.format(35)
    },
  ]

  return(
    <div className="container-produtos">
      <ul>
        {produtos.map(produto => 
          <li key={produto.id}>
            <strong>{produto.id}</strong>
            <strong>{produto.nome}</strong>
            <p>{produto.preco}</p>
          </li>
        )}
      </ul>
    </div>
  )
}