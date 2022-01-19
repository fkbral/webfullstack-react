import { FaSpinner } from 'react-icons/fa'
import './styles.css'
import PropTypes from 'prop-types'

export function Button(props) {
  const {isLoading, size, children} = props

  console.log(children)
  
  if(isLoading) {
    return (
      <button style={{fontSize: `${size}px`}} className='btn'>
        <FaSpinner className='spin' />
      </button>
    )
  }

  return (
    <button style={{fontSize: `${size}px`}} className='btn'>
      {children}
    </button>
  )
}

// export function Button({isLoading=false, size=16, children}) {
//   return (
//     <button style={{fontSize: `${size}px`}}>
//       {/* {isLoading && 
//         'Carregando'
//       }

//       {!isLoading && 
//         'Cadastre-se'
//       } */}

//       {/* {isLoading 
//         ?'Carregando'
//         : 'Cadastre-se'
//       } */}

//       {isLoading 
//         ? <FaSpinner className='spin' />
//         : {children}
//       }
//     </button>
//   )
// }

Button.propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.number,
}

Button.defaultProps = {
  isLoading: false,
  size: 16,
}