import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div
      style={{
        fontSize: 19,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          marginRight: 15,
        }}
      >
        Home
      </Link>
      <Link to="/about">About</Link>
    </div>
  );
}

// export default class Menu extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           fontSize: 19,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Link
//           to="/"
//           style={{
//             marginRight: 15,
//           }}
//         >
//           Home
//         </Link>
//         <Link to="/about">About</Link>
//       </div>
//     );
//   }
// }
