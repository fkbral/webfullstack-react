import './styles.css'

// export function Titulo(props) {
//   // propriedade tamanho
//   console.log(props)

//   return(
//     <div id={props.id}>
//       <h1 className={`texto-${props.tamanho}`} style={props.style}>olá</h1>
//       <p>subtitulo</p>
//     </div>
//   )
// }

export function Titulo(props) {
  // propriedade tamanho
  const {tamanho, texto, ...rest} = props
  // console.log(rest)

  return(
    <h1
      className={`texto-${tamanho ?? 'md'}`}
      {...rest}
    >
      {texto}
    </h1>
  )
}