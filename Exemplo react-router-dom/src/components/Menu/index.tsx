import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Menu() {
  return (
    <div className="menu-container">
      <Link
        to="/"
        style={{
          marginRight: 15,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          marginRight: 15,
        }}
      >
        About
      </Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/peopleList">People</Link>
      <Link to="/gitHubProfile">Github Profile</Link>
      <Link to="/classList">Class list</Link>
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
