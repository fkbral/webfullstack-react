import { FaSpinner } from 'react-icons/fa'
import './styles.css'
import PropTypes from 'prop-types'

export function Button({isLoading=false, size=16, children}) {
  if(isLoading) {
    return (
      <button style={{fontSize: `${size}px`}}>
          <FaSpinner className='spin' />
      </button>
    )
  }

  return (
    <button style={{fontSize: `${size}px`}}>
      {children}
    </button>
  )
}

// export function Button({isLoading=false, size=16}) {
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

      // {isLoading 
      //   ? <FaSpinner className='spin' />
      //   : 'Cadastre-se'
      // }
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