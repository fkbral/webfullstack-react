import './index.css'

export function Produtos() {
  const formatadorDePreco = Intl.NumberFormat(
    'pt-BR', {currency: 'BRL', style: 'currency'}
  )

  const produtos = [
    {
      nome: 'lápis hb2',
      preco: formatadorDePreco.format(2)
    },
    {
      nome: 'impressora',
      preco: formatadorDePreco.format(400)
    },
    {
      nome: 'jaqueta',
      preco: formatadorDePreco.format(355.99)
    },
    {
      nome: 'calça jeans',
      preco: formatadorDePreco.format(80.25)
    },
    {
      nome: 'saia',
      preco: formatadorDePreco.format(120)
    },
    {
      nome: 'vestido',
      preco: formatadorDePreco.format(700)
    },
    {
      nome: 'bota',
      preco: formatadorDePreco.format(425)
    },
    {
      nome: 'meia',
      preco: formatadorDePreco.format(10)
    },
    {
      nome: 'tênis de corrida',
      preco: formatadorDePreco.format(240)
    },
    {
      nome: 'camiseta branca',
      preco: formatadorDePreco.format(35)
    },
  ]

  return(
    <div className="container-produtos">
      <ul>
        {produtos.map(produto => 
          <li>
            <strong>{produto.nome}</strong>
            <p>{produto.preco}</p>
          </li>
        )}
      </ul>
    </div>
  )
}