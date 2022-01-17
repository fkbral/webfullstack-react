import { FaSpinner } from 'react-icons/fa'
import './styles.css'

export function Button({isLoading=false, size=16}) {
  if(isLoading) {
    return (
      <button style={{fontSize: `${size}px`}}>
          <FaSpinner className='spin' />
      </button>
    )
  }

  return (
    <button style={{fontSize: `${size}px`}}>
      Cadastre-se
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